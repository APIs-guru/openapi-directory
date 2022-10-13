from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import faceattributes_enum
from . import notificationchannel
from . import video


@dataclass_json
@dataclass
class StartFaceDetectionRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    face_attributes: Optional[faceattributes_enum.FaceAttributesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceAttributes' }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobTag' }})
    notification_channel: Optional[notificationchannel.NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationChannel' }})
    video: video.Video = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video' }})
    
