from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSegmentDetectionResponse:
    audio_metadata: Optional[List[AudioMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioMetadata') }})
    job_status: Optional[VideoJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    segments: Optional[List[SegmentDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segments') }})
    selected_segment_types: Optional[List[SegmentTypeInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedSegmentTypes') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[List[VideoMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
