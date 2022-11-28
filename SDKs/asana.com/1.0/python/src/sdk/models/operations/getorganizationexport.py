from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetOrganizationExportPathParams:
    organization_export_gid: str = field(metadata={'path_param': { 'field_name': 'organization_export_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationExportQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetOrganizationExport200ApplicationJSON:
    data: Optional[shared.OrganizationExportResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetOrganizationExportRequest:
    path_params: GetOrganizationExportPathParams = field()
    query_params: GetOrganizationExportQueryParams = field()
    

@dataclass
class GetOrganizationExportResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_organization_export_200_application_json_object: Optional[GetOrganizationExport200ApplicationJSON] = field(default=None)
    
