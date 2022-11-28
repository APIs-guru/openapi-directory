from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutVideoChannelPathParams:
    channel_handle: str = field(metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutVideoChannelRequest:
    path_params: PutVideoChannelPathParams = field()
    security: PutVideoChannelSecurity = field()
    request: Optional[shared.VideoChannelUpdateInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutVideoChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
