from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LeadsUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeadsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class LeadsUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class LeadsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LeadsUpdateRequest:
    path_params: LeadsUpdatePathParams = field(default=None)
    query_params: LeadsUpdateQueryParams = field(default=None)
    headers: LeadsUpdateHeaders = field(default=None)
    request: shared.Lead = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: LeadsUpdateSecurity = field(default=None)
    

@dataclass
class LeadsUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_lead_response: Optional[shared.UpdateLeadResponse] = field(default=None)
    

@dataclass
class LeadsUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, LeadsUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
