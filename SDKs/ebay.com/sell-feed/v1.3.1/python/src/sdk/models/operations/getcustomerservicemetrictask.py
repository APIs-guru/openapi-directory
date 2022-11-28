from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomerServiceMetricTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerServiceMetricTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCustomerServiceMetricTaskRequest:
    path_params: GetCustomerServiceMetricTaskPathParams = field()
    security: GetCustomerServiceMetricTaskSecurity = field()
    

@dataclass
class GetCustomerServiceMetricTaskResponse:
    content_type: str = field()
    status_code: int = field()
    service_metrics_task: Optional[shared.ServiceMetricsTask] = field(default=None)
    
