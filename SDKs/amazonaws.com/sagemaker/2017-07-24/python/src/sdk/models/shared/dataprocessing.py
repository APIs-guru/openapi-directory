from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import joinsource_enum


@dataclass_json
@dataclass
class DataProcessing:
    input_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputFilter' }})
    join_source: Optional[joinsource_enum.JoinSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JoinSource' }})
    output_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFilter' }})
    
