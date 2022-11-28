from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposSetAppAccessRestrictionsPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposSetAppAccessRestrictionsRequestBody1:
    apps: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    

@dataclass
class ReposSetAppAccessRestrictionsRequest:
    path_params: ReposSetAppAccessRestrictionsPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposSetAppAccessRestrictionsResponse:
    content_type: str = field()
    status_code: int = field()
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
