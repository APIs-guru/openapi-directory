from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GitCreateBlobPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateBlobRequestBody:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    

@dataclass
class GitCreateBlobRequest:
    path_params: GitCreateBlobPathParams = field(default=None)
    request: Optional[GitCreateBlobRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateBlobResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    short_blob: Optional[shared.ShortBlob] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
