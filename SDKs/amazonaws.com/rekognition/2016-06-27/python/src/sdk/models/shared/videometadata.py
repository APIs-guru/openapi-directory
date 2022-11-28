from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoMetadata:
    r"""VideoMetadata
    Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
    """
    
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    color_range: Optional[VideoColorRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColorRange') }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    frame_height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameHeight') }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    frame_width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameWidth') }})
    
