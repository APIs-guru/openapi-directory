from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GrantSpaceAccesPathParams:
    participant_id: str = field(metadata={'path_param': { 'field_name': 'participantId', 'style': 'simple', 'explode': False }})
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GrantSpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GrantSpaceAccesRequest:
    path_params: GrantSpaceAccesPathParams = field()
    security: GrantSpaceAccesSecurity = field()
    

@dataclass
class GrantSpaceAccesResponse:
    content_type: str = field()
    status_code: int = field()
    
