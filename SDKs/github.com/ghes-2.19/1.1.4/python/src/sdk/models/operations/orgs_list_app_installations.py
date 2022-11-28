from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsListAppInstallationsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListAppInstallationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListAppInstallationsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsListAppInstallations200ApplicationJSON:
    installations: List[shared.InstallationGhes2] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('installations') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class OrgsListAppInstallationsRequest:
    headers: OrgsListAppInstallationsHeaders = field()
    path_params: OrgsListAppInstallationsPathParams = field()
    query_params: OrgsListAppInstallationsQueryParams = field()
    

@dataclass
class OrgsListAppInstallationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    orgs_list_app_installations_200_application_json_object: Optional[OrgsListAppInstallations200ApplicationJSON] = field(default=None)
    
