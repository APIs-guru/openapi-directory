from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streaminfo


@dataclass_json
@dataclass
class DescribeStreamOutput:
    stream_info: Optional[streaminfo.StreamInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamInfo' }})
    
