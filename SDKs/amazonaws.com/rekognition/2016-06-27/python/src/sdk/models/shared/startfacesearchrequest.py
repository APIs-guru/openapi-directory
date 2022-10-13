from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationchannel
from . import video


@dataclass_json
@dataclass
class StartFaceSearchRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    collection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    face_match_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatchThreshold' }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobTag' }})
    notification_channel: Optional[notificationchannel.NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationChannel' }})
    video: video.Video = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video' }})
    
