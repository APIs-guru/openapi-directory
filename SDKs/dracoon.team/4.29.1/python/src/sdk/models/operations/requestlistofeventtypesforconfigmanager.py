from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestListOfEventTypesForConfigManagerHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestListOfEventTypesForConfigManagerRequest:
    headers: RequestListOfEventTypesForConfigManagerHeaders = field(default=None)
    

@dataclass
class RequestListOfEventTypesForConfigManagerResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    event_type_list: Optional[shared.EventTypeList] = field(default=None)
    status_code: int = field(default=None)
    
