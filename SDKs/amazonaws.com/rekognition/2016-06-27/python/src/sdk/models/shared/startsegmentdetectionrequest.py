from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import startsegmentdetectionfilters
from . import notificationchannel
from . import segmenttype_enum
from . import video


@dataclass_json
@dataclass
class StartSegmentDetectionRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    filters: Optional[startsegmentdetectionfilters.StartSegmentDetectionFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobTag' }})
    notification_channel: Optional[notificationchannel.NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationChannel' }})
    segment_types: List[segmenttype_enum.SegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentTypes' }})
    video: video.Video = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video' }})
    
