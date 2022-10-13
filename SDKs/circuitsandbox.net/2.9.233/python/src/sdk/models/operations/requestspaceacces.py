from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RequestSpaceAccesPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSpaceAccesRequestBody:
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'reason' }})
    

@dataclass
class RequestSpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RequestSpaceAccesRequest:
    path_params: RequestSpaceAccesPathParams = field(default=None)
    request: Optional[RequestSpaceAccesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: RequestSpaceAccesSecurity = field(default=None)
    

@dataclass
class RequestSpaceAccesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
