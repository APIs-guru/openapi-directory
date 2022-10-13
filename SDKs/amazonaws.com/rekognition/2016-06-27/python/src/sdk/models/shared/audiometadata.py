from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioMetadata:
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationMillis' }})
    number_of_channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfChannels' }})
    sample_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    
