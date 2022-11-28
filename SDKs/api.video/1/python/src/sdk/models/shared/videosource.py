from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoSource:
    r"""VideoSource
    Source information about the video.
    """
    
    live_stream: Optional[VideoSourceLiveStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveStream') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
