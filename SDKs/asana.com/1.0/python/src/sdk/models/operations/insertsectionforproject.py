from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InsertSectionForProjectPathParams:
    project_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class InsertSectionForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class InsertSectionForProjectRequestBody:
    data: Optional[shared.ProjectSectionInsertRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class InsertSectionForProjectRequest:
    path_params: InsertSectionForProjectPathParams = field(default=None)
    query_params: InsertSectionForProjectQueryParams = field(default=None)
    request: InsertSectionForProjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class InsertSectionForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class InsertSectionForProjectResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    insert_section_for_project_200_application_json_object: Optional[InsertSectionForProject200ApplicationJSON] = field(default=None)
    
