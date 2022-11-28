from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentDetection:
    r"""SegmentDetection
    A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
    """
    
    duration_frames: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationFrames') }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    duration_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSMPTE') }})
    end_frame_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndFrameNumber') }})
    end_timecode_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimecodeSMPTE') }})
    end_timestamp_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimestampMillis') }})
    shot_segment: Optional[ShotSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShotSegment') }})
    start_frame_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartFrameNumber') }})
    start_timecode_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimecodeSMPTE') }})
    start_timestamp_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimestampMillis') }})
    technical_cue_segment: Optional[TechnicalCueSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechnicalCueSegment') }})
    type: Optional[SegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
