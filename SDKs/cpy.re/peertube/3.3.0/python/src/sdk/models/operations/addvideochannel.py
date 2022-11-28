from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class AddVideoChannel204ApplicationJSONVideoChannel:
    id: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class AddVideoChannel204ApplicationJSON:
    video_channel: Optional[AddVideoChannel204ApplicationJSONVideoChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoChannel') }})
    

@dataclass
class AddVideoChannelRequest:
    security: AddVideoChannelSecurity = field()
    request: Optional[shared.VideoChannelCreateInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddVideoChannelResponse:
    content_type: str = field()
    status_code: int = field()
    add_video_channel_204_application_json_object: Optional[AddVideoChannel204ApplicationJSON] = field(default=None)
    
