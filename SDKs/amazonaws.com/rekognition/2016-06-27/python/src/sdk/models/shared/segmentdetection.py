from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shotsegment
from . import technicalcuesegment
from . import segmenttype_enum


@dataclass_json
@dataclass
class SegmentDetection:
    duration_frames: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationFrames' }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationMillis' }})
    duration_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationSMPTE' }})
    end_frame_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndFrameNumber' }})
    end_timecode_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimecodeSMPTE' }})
    end_timestamp_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimestampMillis' }})
    shot_segment: Optional[shotsegment.ShotSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShotSegment' }})
    start_frame_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartFrameNumber' }})
    start_timecode_smpte: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimecodeSMPTE' }})
    start_timestamp_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimestampMillis' }})
    technical_cue_segment: Optional[technicalcuesegment.TechnicalCueSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechnicalCueSegment' }})
    type: Optional[segmenttype_enum.SegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
