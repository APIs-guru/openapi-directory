from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LocationsUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LocationsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class LocationsUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class LocationsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LocationsUpdateRequest:
    path_params: LocationsUpdatePathParams = field(default=None)
    query_params: LocationsUpdateQueryParams = field(default=None)
    headers: LocationsUpdateHeaders = field(default=None)
    request: shared.Location = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: LocationsUpdateSecurity = field(default=None)
    

@dataclass
class LocationsUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_location_response: Optional[shared.UpdateLocationResponse] = field(default=None)
    

@dataclass
class LocationsUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, LocationsUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
