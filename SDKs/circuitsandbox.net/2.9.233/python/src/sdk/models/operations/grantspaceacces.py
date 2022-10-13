from dataclasses import dataclass, field



@dataclass
class GrantSpaceAccesPathParams:
    participant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'participantId', 'style': 'simple', 'explode': False }})
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GrantSpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GrantSpaceAccesRequest:
    path_params: GrantSpaceAccesPathParams = field(default=None)
    security: GrantSpaceAccesSecurity = field(default=None)
    

@dataclass
class GrantSpaceAccesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
