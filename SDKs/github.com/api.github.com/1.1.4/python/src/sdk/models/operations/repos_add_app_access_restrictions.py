from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposAddAppAccessRestrictionsPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposAddAppAccessRestrictionsRequestBody:
    apps: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    

@dataclass
class ReposAddAppAccessRestrictionsRequest:
    path_params: ReposAddAppAccessRestrictionsPathParams = field()
    request: Optional[ReposAddAppAccessRestrictionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposAddAppAccessRestrictionsResponse:
    content_type: str = field()
    status_code: int = field()
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
