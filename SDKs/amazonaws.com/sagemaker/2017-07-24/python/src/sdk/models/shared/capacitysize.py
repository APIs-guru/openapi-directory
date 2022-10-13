from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import capacitysizetype_enum


@dataclass_json
@dataclass
class CapacitySize:
    type: capacitysizetype_enum.CapacitySizeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
