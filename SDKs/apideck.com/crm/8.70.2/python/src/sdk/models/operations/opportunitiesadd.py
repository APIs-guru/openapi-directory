from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OpportunitiesAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class OpportunitiesAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OpportunitiesAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OpportunitiesAddRequest:
    query_params: OpportunitiesAddQueryParams = field(default=None)
    headers: OpportunitiesAddHeaders = field(default=None)
    request: shared.Opportunity = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: OpportunitiesAddSecurity = field(default=None)
    

@dataclass
class OpportunitiesAddResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    create_opportunity_response: Optional[shared.CreateOpportunityResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
