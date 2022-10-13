from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideostatusEncodingMetadata:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    audio_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioCodec' }})
    bitrate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrate' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    framerate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framerate' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    samplerate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplerate' }})
    video_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCodec' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
