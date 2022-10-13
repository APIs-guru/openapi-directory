from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomerServiceMetricPathParams:
    customer_service_metric_type: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_service_metric_type', 'style': 'simple', 'explode': False }})
    evaluation_type: str = field(default=None, metadata={'path_param': { 'field_name': 'evaluation_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerServiceMetricQueryParams:
    evaluation_marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'evaluation_marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomerServiceMetricSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCustomerServiceMetricRequest:
    path_params: GetCustomerServiceMetricPathParams = field(default=None)
    query_params: GetCustomerServiceMetricQueryParams = field(default=None)
    security: GetCustomerServiceMetricSecurity = field(default=None)
    

@dataclass
class GetCustomerServiceMetricResponse:
    content_type: str = field(default=None)
    get_customer_service_metric_response: Optional[shared.GetCustomerServiceMetricResponse] = field(default=None)
    status_code: int = field(default=None)
    
