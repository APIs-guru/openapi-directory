from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import instanceinformationfilterkey_enum


@dataclass_json
@dataclass
class InstanceInformationFilter:
    key: instanceinformationfilterkey_enum.InstanceInformationFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value_set: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSet' }})
    
