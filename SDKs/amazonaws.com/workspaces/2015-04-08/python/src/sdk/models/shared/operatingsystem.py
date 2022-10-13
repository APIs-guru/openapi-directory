from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystemtype_enum


@dataclass_json
@dataclass
class OperatingSystem:
    type: Optional[operatingsystemtype_enum.OperatingSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
