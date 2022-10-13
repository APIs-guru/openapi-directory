from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsListInstallationsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationsForAuthenticatedUserRequest:
    query_params: AppsListInstallationsForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AppsListInstallationsForAuthenticatedUser200ApplicationJSON:
    installations: List[shared.Installation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installations' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass_json
@dataclass
class AppsListInstallationsForAuthenticatedUser415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class AppsListInstallationsForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    apps_list_installations_for_authenticated_user_200_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser200ApplicationJSON] = field(default=None)
    apps_list_installations_for_authenticated_user_415_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser415ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
