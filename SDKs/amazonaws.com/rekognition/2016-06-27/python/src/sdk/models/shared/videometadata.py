from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import videocolorrange_enum


@dataclass_json
@dataclass
class VideoMetadata:
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    color_range: Optional[videocolorrange_enum.VideoColorRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColorRange' }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationMillis' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    frame_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameHeight' }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    frame_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameWidth' }})
    
