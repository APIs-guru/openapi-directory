from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MigrationsMapCommitAuthorPathParams:
    author_id: int = field(metadata={'path_param': { 'field_name': 'author_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MigrationsMapCommitAuthorRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_id') }})
    

@dataclass
class MigrationsMapCommitAuthorRequest:
    path_params: MigrationsMapCommitAuthorPathParams = field()
    request: Optional[MigrationsMapCommitAuthorRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MigrationsMapCommitAuthorResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    porter_author: Optional[shared.PorterAuthor] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
