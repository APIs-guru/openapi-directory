from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioMetadata:
    r"""AudioMetadata
    Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. 
    """
    
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    number_of_channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfChannels') }})
    sample_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    
