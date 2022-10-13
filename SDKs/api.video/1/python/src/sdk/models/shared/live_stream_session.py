from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import live_stream_session_client
from . import live_stream_session_device
from . import live_stream_session_location
from . import video_session_os
from . import live_stream_session_referrer
from . import live_stream_session_session


@dataclass_json
@dataclass
class LiveStreamSession:
    client: Optional[live_stream_session_client.LiveStreamSessionClient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    device: Optional[live_stream_session_device.LiveStreamSessionDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    location: Optional[live_stream_session_location.LiveStreamSessionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    os: Optional[video_session_os.VideoSessionOs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    referrer: Optional[live_stream_session_referrer.LiveStreamSessionReferrer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    session: Optional[live_stream_session_session.LiveStreamSessionSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
