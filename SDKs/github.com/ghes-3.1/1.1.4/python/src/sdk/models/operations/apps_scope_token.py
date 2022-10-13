from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsScopeTokenPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsScopeTokenRequestBody:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    permissions: Optional[shared.AppPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_ids' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    target_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_id' }})
    

@dataclass
class AppsScopeTokenRequest:
    path_params: AppsScopeTokenPathParams = field(default=None)
    request: Optional[AppsScopeTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsScopeTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
