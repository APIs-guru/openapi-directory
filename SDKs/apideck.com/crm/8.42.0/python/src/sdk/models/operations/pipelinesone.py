from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PipelinesOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PipelinesOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class PipelinesOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class PipelinesOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PipelinesOneRequest:
    path_params: PipelinesOnePathParams = field(default=None)
    query_params: PipelinesOneQueryParams = field(default=None)
    headers: PipelinesOneHeaders = field(default=None)
    security: PipelinesOneSecurity = field(default=None)
    

@dataclass
class PipelinesOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_pipeline_response: Optional[shared.GetPipelineResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class PipelinesOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, PipelinesOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
