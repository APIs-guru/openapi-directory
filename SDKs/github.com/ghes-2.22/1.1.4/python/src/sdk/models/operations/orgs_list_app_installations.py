from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsListAppInstallationsPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListAppInstallationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListAppInstallationsRequest:
    path_params: OrgsListAppInstallationsPathParams = field(default=None)
    query_params: OrgsListAppInstallationsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class OrgsListAppInstallations200ApplicationJSON:
    installations: List[shared.InstallationGhes2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installations' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class OrgsListAppInstallationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    orgs_list_app_installations_200_application_json_object: Optional[OrgsListAppInstallations200ApplicationJSON] = field(default=None)
    
