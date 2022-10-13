from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import executionerrortype_enum


@dataclass_json
@dataclass
class ExecutionError:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    type: executionerrortype_enum.ExecutionErrorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
