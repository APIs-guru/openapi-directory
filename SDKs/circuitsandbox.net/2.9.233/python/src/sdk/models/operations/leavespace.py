from dataclasses import dataclass, field



@dataclass
class LeaveSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LeaveSpaceRequest:
    path_params: LeaveSpacePathParams = field(default=None)
    security: LeaveSpaceSecurity = field(default=None)
    

@dataclass
class LeaveSpaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
