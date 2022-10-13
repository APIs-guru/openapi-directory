from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PipelinesUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PipelinesUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class PipelinesUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class PipelinesUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PipelinesUpdateRequest:
    path_params: PipelinesUpdatePathParams = field(default=None)
    query_params: PipelinesUpdateQueryParams = field(default=None)
    headers: PipelinesUpdateHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PipelinesUpdateSecurity = field(default=None)
    

@dataclass
class PipelinesUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_pipeline_response: Optional[shared.UpdatePipelineResponse] = field(default=None)
    

@dataclass
class PipelinesUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, PipelinesUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
