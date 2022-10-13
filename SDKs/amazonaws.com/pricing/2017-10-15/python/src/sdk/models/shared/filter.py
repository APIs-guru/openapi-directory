from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import filtertype_enum


@dataclass_json
@dataclass
class Filter:
    field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Field' }})
    type: filtertype_enum.FilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
