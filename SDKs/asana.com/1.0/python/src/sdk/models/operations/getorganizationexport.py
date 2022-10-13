from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetOrganizationExportPathParams:
    organization_export_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'organization_export_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationExportQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationExportRequest:
    path_params: GetOrganizationExportPathParams = field(default=None)
    query_params: GetOrganizationExportQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetOrganizationExport200ApplicationJSON:
    data: Optional[shared.OrganizationExportResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetOrganizationExportResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_organization_export_200_application_json_object: Optional[GetOrganizationExport200ApplicationJSON] = field(default=None)
    
