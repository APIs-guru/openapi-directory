from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LocationsOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LocationsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class LocationsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class LocationsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocationsOneRequest:
    path_params: LocationsOnePathParams = field(default=None)
    query_params: LocationsOneQueryParams = field(default=None)
    headers: LocationsOneHeaders = field(default=None)
    security: LocationsOneSecurity = field(default=None)
    

@dataclass
class LocationsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_location_response: Optional[shared.GetLocationResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class LocationsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, LocationsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
