from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomerServiceMetricPathParams:
    customer_service_metric_type: str = field(metadata={'path_param': { 'field_name': 'customer_service_metric_type', 'style': 'simple', 'explode': False }})
    evaluation_type: str = field(metadata={'path_param': { 'field_name': 'evaluation_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerServiceMetricQueryParams:
    evaluation_marketplace_id: str = field(metadata={'query_param': { 'field_name': 'evaluation_marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomerServiceMetricSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCustomerServiceMetricRequest:
    path_params: GetCustomerServiceMetricPathParams = field()
    query_params: GetCustomerServiceMetricQueryParams = field()
    security: GetCustomerServiceMetricSecurity = field()
    

@dataclass
class GetCustomerServiceMetricResponse:
    content_type: str = field()
    status_code: int = field()
    get_customer_service_metric_response: Optional[shared.GetCustomerServiceMetricResponse] = field(default=None)
    
