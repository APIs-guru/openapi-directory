from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import video_session_client
from . import video_session_device
from . import video_session_location
from . import video_session_os
from . import video_session_referrer
from . import video_session_session


@dataclass_json
@dataclass
class VideoSession:
    client: Optional[video_session_client.VideoSessionClient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    device: Optional[video_session_device.VideoSessionDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    location: Optional[video_session_location.VideoSessionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    os: Optional[video_session_os.VideoSessionOs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    referrer: Optional[video_session_referrer.VideoSessionReferrer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    session: Optional[video_session_session.VideoSessionSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
