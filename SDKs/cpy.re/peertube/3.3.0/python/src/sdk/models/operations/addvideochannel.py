from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoChannelRequest:
    request: Optional[shared.VideoChannelCreate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddVideoChannelSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddVideoChannel204ApplicationJSONVideoChannel:
    id: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class AddVideoChannel204ApplicationJSON:
    video_channel: Optional[AddVideoChannel204ApplicationJSONVideoChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoChannel' }})
    

@dataclass
class AddVideoChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_video_channel_204_application_json_object: Optional[AddVideoChannel204ApplicationJSON] = field(default=None)
    
