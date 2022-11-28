from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Channel:
    r"""Channel
    A channel is a named input source that training algorithms can consume. 
    """
    
    channel_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelName') }})
    data_source: DataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    compression_type: Optional[CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionType') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    input_mode: Optional[TrainingInputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputMode') }})
    record_wrapper_type: Optional[RecordWrapperEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordWrapperType') }})
    shuffle_config: Optional[ShuffleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShuffleConfig') }})
    
