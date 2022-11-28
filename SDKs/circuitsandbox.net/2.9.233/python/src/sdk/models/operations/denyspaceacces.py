from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DenySpaceAccesPathParams:
    participant_id: str = field(metadata={'path_param': { 'field_name': 'participantId', 'style': 'simple', 'explode': False }})
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DenySpaceAccesRequestBody:
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'reason' }})
    

@dataclass
class DenySpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DenySpaceAccesRequest:
    path_params: DenySpaceAccesPathParams = field()
    security: DenySpaceAccesSecurity = field()
    request: Optional[DenySpaceAccesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class DenySpaceAccesResponse:
    content_type: str = field()
    status_code: int = field()
    
