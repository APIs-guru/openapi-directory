from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InsertEnumOptionForCustomFieldPathParams:
    custom_field_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'custom_field_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class InsertEnumOptionForCustomFieldQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class InsertEnumOptionForCustomFieldRequestBody:
    data: Optional[shared.EnumOptionInsertRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class InsertEnumOptionForCustomFieldRequest:
    path_params: InsertEnumOptionForCustomFieldPathParams = field(default=None)
    query_params: InsertEnumOptionForCustomFieldQueryParams = field(default=None)
    request: Optional[InsertEnumOptionForCustomFieldRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class InsertEnumOptionForCustomField200ApplicationJSON:
    data: Optional[shared.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class InsertEnumOptionForCustomFieldResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    insert_enum_option_for_custom_field_200_application_json_object: Optional[InsertEnumOptionForCustomField200ApplicationJSON] = field(default=None)
    
