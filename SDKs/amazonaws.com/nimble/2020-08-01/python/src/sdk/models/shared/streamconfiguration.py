from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamConfiguration:
    r"""StreamConfiguration
    A configuration for a streaming session.
    """
    
    clipboard_mode: Optional[StreamingClipboardModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clipboardMode') }})
    ec2_instance_types: Optional[List[StreamingInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceTypes') }})
    max_session_length_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSessionLengthInMinutes') }})
    streaming_image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImageIds') }})
    
