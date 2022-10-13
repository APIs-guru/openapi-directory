from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsCreateInstallationAccessTokenPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsCreateInstallationAccessTokenRequestBody:
    permissions: Optional[shared.AppPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_ids' }})
    

@dataclass
class AppsCreateInstallationAccessTokenRequest:
    path_params: AppsCreateInstallationAccessTokenPathParams = field(default=None)
    request: Optional[AppsCreateInstallationAccessTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AppsCreateInstallationAccessToken415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class AppsCreateInstallationAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apps_create_installation_access_token_415_application_json_object: Optional[AppsCreateInstallationAccessToken415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation_token: Optional[shared.InstallationToken] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
