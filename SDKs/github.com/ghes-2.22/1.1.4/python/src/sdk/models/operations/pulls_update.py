from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsUpdatePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsUpdateRequestBodyStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullsUpdateRequestBody:
    base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    maintainer_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintainer_can_modify' }})
    state: Optional[PullsUpdateRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PullsUpdateRequest:
    path_params: PullsUpdatePathParams = field(default=None)
    request: Optional[PullsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request: Optional[shared.PullRequest] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
