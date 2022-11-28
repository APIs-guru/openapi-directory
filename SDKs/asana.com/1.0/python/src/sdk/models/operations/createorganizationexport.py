from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateOrganizationExportQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateOrganizationExportRequestBody:
    data: Optional[shared.OrganizationExportRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateOrganizationExport201ApplicationJSON:
    data: Optional[shared.OrganizationExportResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateOrganizationExportRequest:
    query_params: CreateOrganizationExportQueryParams = field()
    request: CreateOrganizationExportRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationExportResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_organization_export_201_application_json_object: Optional[CreateOrganizationExport201ApplicationJSON] = field(default=None)
    
