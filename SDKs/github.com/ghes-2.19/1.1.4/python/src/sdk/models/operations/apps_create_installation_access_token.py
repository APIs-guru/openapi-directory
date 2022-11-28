from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsCreateInstallationAccessTokenPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsCreateInstallationAccessTokenHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsCreateInstallationAccessTokenRequestBody:
    permissions: Optional[shared.AppPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_ids') }})
    

@dataclass_json
@dataclass
class AppsCreateInstallationAccessToken415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppsCreateInstallationAccessTokenRequest:
    headers: AppsCreateInstallationAccessTokenHeaders = field()
    path_params: AppsCreateInstallationAccessTokenPathParams = field()
    request: Optional[AppsCreateInstallationAccessTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsCreateInstallationAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    apps_create_installation_access_token_415_application_json_object: Optional[AppsCreateInstallationAccessToken415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation_token: Optional[shared.InstallationToken] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
