from dataclasses import dataclass, field
from typing import Optional


@dataclass
class V2UpdateWelcomeBoxContentPathParams:
    content: str = field(default=None, metadata={'path_param': { 'field_name': 'content', 'style': 'simple', 'explode': False }})
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2UpdateWelcomeBoxContentRequestBody:
    display_welcome_box: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'displayWelcomeBox' }})
    

@dataclass
class V2UpdateWelcomeBoxContentSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2UpdateWelcomeBoxContentRequest:
    path_params: V2UpdateWelcomeBoxContentPathParams = field(default=None)
    request: Optional[V2UpdateWelcomeBoxContentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: V2UpdateWelcomeBoxContentSecurity = field(default=None)
    

@dataclass
class V2UpdateWelcomeBoxContentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
