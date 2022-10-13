from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DenySpaceAccesPathParams:
    participant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'participantId', 'style': 'simple', 'explode': False }})
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DenySpaceAccesRequestBody:
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'reason' }})
    

@dataclass
class DenySpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DenySpaceAccesRequest:
    path_params: DenySpaceAccesPathParams = field(default=None)
    request: Optional[DenySpaceAccesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: DenySpaceAccesSecurity = field(default=None)
    

@dataclass
class DenySpaceAccesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
