from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filternamestringtype_enum


@dataclass_json
@dataclass
class Filter:
    key: Optional[filternamestringtype_enum.FilterNameStringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
