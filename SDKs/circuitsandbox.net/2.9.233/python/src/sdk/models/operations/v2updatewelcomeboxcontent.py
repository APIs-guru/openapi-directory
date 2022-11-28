from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class V2UpdateWelcomeBoxContentPathParams:
    content: str = field(metadata={'path_param': { 'field_name': 'content', 'style': 'simple', 'explode': False }})
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2UpdateWelcomeBoxContentRequestBody:
    display_welcome_box: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'displayWelcomeBox' }})
    

@dataclass
class V2UpdateWelcomeBoxContentSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2UpdateWelcomeBoxContentRequest:
    path_params: V2UpdateWelcomeBoxContentPathParams = field()
    security: V2UpdateWelcomeBoxContentSecurity = field()
    request: Optional[V2UpdateWelcomeBoxContentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class V2UpdateWelcomeBoxContentResponse:
    content_type: str = field()
    status_code: int = field()
    
