from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import streamingclipboardmode_enum
from . import streaminginstancetype_enum


@dataclass_json
@dataclass
class StreamConfiguration:
    clipboard_mode: Optional[streamingclipboardmode_enum.StreamingClipboardModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clipboardMode' }})
    ec2_instance_types: Optional[List[streaminginstancetype_enum.StreamingInstanceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceTypes' }})
    max_session_length_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSessionLengthInMinutes' }})
    streaming_image_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageIds' }})
    
