from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateCommitStatusPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    sha: str = field(default=None, metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    
class ReposCreateCommitStatusRequestBodyStateEnum(str, Enum):
    ERROR = "error"
    FAILURE = "failure"
    PENDING = "pending"
    SUCCESS = "success"


@dataclass_json
@dataclass
class ReposCreateCommitStatusRequestBody:
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    state: ReposCreateCommitStatusRequestBodyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_url' }})
    

@dataclass
class ReposCreateCommitStatusRequest:
    path_params: ReposCreateCommitStatusPathParams = field(default=None)
    request: Optional[ReposCreateCommitStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateCommitStatusResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    status: Optional[shared.Status] = field(default=None)
    
