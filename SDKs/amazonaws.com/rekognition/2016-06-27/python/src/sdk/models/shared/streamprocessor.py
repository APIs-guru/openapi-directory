from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamprocessorstatus_enum


@dataclass_json
@dataclass
class StreamProcessor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[streamprocessorstatus_enum.StreamProcessorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
