from dataclasses import dataclass, field



@dataclass
class DelMirroredVideoPathParams:
    redundancy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'redundancyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelMirroredVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelMirroredVideoRequest:
    path_params: DelMirroredVideoPathParams = field(default=None)
    security: DelMirroredVideoSecurity = field(default=None)
    

@dataclass
class DelMirroredVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
