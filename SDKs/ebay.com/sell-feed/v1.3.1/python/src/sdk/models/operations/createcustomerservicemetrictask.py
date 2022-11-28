from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateCustomerServiceMetricTaskHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'accept-language', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerServiceMetricTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomerServiceMetricTaskRequest:
    headers: CreateCustomerServiceMetricTaskHeaders = field()
    request: shared.CreateServiceMetricsTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomerServiceMetricTaskSecurity = field()
    

@dataclass
class CreateCustomerServiceMetricTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
