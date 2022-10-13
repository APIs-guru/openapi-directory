from dataclasses import dataclass, field



@dataclass
class DeleteSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSpaceRequest:
    path_params: DeleteSpacePathParams = field(default=None)
    security: DeleteSpaceSecurity = field(default=None)
    

@dataclass
class DeleteSpaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
