from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class LeaveSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LeaveSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LeaveSpaceRequest:
    path_params: LeaveSpacePathParams = field()
    security: LeaveSpaceSecurity = field()
    

@dataclass
class LeaveSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    
