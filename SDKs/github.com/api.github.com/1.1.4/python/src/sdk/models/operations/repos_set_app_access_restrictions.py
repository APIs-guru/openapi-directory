from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposSetAppAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposSetAppAccessRestrictionsRequestBody:
    apps: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    

@dataclass
class ReposSetAppAccessRestrictionsRequest:
    path_params: ReposSetAppAccessRestrictionsPathParams = field(default=None)
    request: Optional[ReposSetAppAccessRestrictionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposSetAppAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
