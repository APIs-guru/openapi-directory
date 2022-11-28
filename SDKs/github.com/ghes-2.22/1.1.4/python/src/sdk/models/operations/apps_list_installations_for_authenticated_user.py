from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsListInstallationsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AppsListInstallationsForAuthenticatedUser200ApplicationJSON:
    installations: List[shared.InstallationGhes2] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('installations') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclass
class AppsListInstallationsForAuthenticatedUser415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppsListInstallationsForAuthenticatedUserRequest:
    query_params: AppsListInstallationsForAuthenticatedUserQueryParams = field()
    

@dataclass
class AppsListInstallationsForAuthenticatedUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    apps_list_installations_for_authenticated_user_200_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser200ApplicationJSON] = field(default=None)
    apps_list_installations_for_authenticated_user_415_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
