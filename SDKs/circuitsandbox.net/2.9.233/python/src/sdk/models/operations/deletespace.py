from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSpaceRequest:
    path_params: DeleteSpacePathParams = field()
    security: DeleteSpaceSecurity = field()
    

@dataclass
class DeleteSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    
