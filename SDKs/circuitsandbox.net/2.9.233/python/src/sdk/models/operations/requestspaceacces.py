from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSpaceAccesPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSpaceAccesRequestBody:
    reason: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'reason' }})
    

@dataclass
class RequestSpaceAccesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RequestSpaceAccesRequest:
    path_params: RequestSpaceAccesPathParams = field()
    security: RequestSpaceAccesSecurity = field()
    request: Optional[RequestSpaceAccesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class RequestSpaceAccesResponse:
    content_type: str = field()
    status_code: int = field()
    
