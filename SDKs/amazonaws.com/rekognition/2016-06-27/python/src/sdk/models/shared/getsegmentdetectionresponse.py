from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import audiometadata
from . import videojobstatus_enum
from . import segmentdetection
from . import segmenttypeinfo
from . import videometadata


@dataclass_json
@dataclass
class GetSegmentDetectionResponse:
    audio_metadata: Optional[List[audiometadata.AudioMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioMetadata' }})
    job_status: Optional[videojobstatus_enum.VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    segments: Optional[List[segmentdetection.SegmentDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segments' }})
    selected_segment_types: Optional[List[segmenttypeinfo.SegmentTypeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectedSegmentTypes' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    video_metadata: Optional[List[videometadata.VideoMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoMetadata' }})
    
