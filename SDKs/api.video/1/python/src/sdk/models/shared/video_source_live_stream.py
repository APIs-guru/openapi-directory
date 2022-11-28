from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoSourceLiveStream:
    r"""VideoSourceLiveStream
    This appears if the video is from a Live Record.
    """
    
    links: Optional[List[VideoSourceLiveStreamLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveStreamId') }})
    
