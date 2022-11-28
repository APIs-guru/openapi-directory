from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GitCreateBlobPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateBlobRequestBody:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    

@dataclass
class GitCreateBlobRequest:
    path_params: GitCreateBlobPathParams = field()
    request: Optional[GitCreateBlobRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateBlobResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    short_blob: Optional[shared.ShortBlob] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
