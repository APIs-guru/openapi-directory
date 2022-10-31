from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestListOfEventTypesForTenantHeaders:
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestListOfEventTypesForTenantRequest:
    headers: RequestListOfEventTypesForTenantHeaders = field(default=None)
    

@dataclass
class RequestListOfEventTypesForTenantResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    event_type_list: Optional[shared.EventTypeList] = field(default=None)
    status_code: int = field(default=None)
    
