from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OpportunitiesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OpportunitiesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class OpportunitiesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class OpportunitiesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OpportunitiesDeleteRequest:
    path_params: OpportunitiesDeletePathParams = field(default=None)
    query_params: OpportunitiesDeleteQueryParams = field(default=None)
    headers: OpportunitiesDeleteHeaders = field(default=None)
    security: OpportunitiesDeleteSecurity = field(default=None)
    

@dataclass
class OpportunitiesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_opportunity_response: Optional[shared.DeleteOpportunityResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class OpportunitiesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, OpportunitiesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
