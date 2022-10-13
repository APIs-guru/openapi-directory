from dataclasses import dataclass, field



@dataclass
class ExistsSpaceNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExistsSpaceNameSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ExistsSpaceNameRequest:
    path_params: ExistsSpaceNamePathParams = field(default=None)
    security: ExistsSpaceNameSecurity = field(default=None)
    

@dataclass
class ExistsSpaceNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
