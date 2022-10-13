from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposRemoveAppAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposRemoveAppAccessRestrictionsRequestBody1:
    apps: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    

@dataclass
class ReposRemoveAppAccessRestrictionsRequest:
    path_params: ReposRemoveAppAccessRestrictionsPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposRemoveAppAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
