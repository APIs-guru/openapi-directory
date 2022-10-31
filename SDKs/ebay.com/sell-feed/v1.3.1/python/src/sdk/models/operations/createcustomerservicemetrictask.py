from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateCustomerServiceMetricTaskHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'accept-language', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerServiceMetricTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomerServiceMetricTaskRequest:
    headers: CreateCustomerServiceMetricTaskHeaders = field(default=None)
    request: shared.CreateServiceMetricsTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomerServiceMetricTaskSecurity = field(default=None)
    

@dataclass
class CreateCustomerServiceMetricTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
