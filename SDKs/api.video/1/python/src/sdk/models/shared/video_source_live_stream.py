from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import video_source_live_stream_link


@dataclass_json
@dataclass
class VideoSourceLiveStream:
    links: Optional[List[video_source_live_stream_link.VideoSourceLiveStreamLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveStreamId' }})
    
