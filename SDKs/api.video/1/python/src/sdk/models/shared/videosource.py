from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import video_source_live_stream


@dataclass_json
@dataclass
class VideoSource:
    live_stream: Optional[video_source_live_stream.VideoSourceLiveStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveStream' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
