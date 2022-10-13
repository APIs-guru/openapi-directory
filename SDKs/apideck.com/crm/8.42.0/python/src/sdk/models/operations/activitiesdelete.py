from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ActivitiesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivitiesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivitiesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ActivitiesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ActivitiesDeleteRequest:
    path_params: ActivitiesDeletePathParams = field(default=None)
    query_params: ActivitiesDeleteQueryParams = field(default=None)
    headers: ActivitiesDeleteHeaders = field(default=None)
    security: ActivitiesDeleteSecurity = field(default=None)
    

@dataclass
class ActivitiesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_activity_response: Optional[shared.DeleteActivityResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ActivitiesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ActivitiesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
