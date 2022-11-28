from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateCommitStatusPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    sha: str = field(metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    
class ReposCreateCommitStatusRequestBodyStateEnum(str, Enum):
    ERROR = "error"
    FAILURE = "failure"
    PENDING = "pending"
    SUCCESS = "success"


@dataclass_json
@dataclass
class ReposCreateCommitStatusRequestBody:
    state: ReposCreateCommitStatusRequestBodyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclass
class ReposCreateCommitStatusRequest:
    path_params: ReposCreateCommitStatusPathParams = field()
    request: Optional[ReposCreateCommitStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateCommitStatusResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    status: Optional[shared.Status] = field(default=None)
    
