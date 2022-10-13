from dataclasses import dataclass, field



@dataclass
class DeleteSchedulePathParams:
    schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteScheduleRequest:
    path_params: DeleteSchedulePathParams = field(default=None)
    security: DeleteScheduleSecurity = field(default=None)
    

@dataclass
class DeleteScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
