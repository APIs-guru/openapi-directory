from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import systemtemplatefiltername_enum


@dataclass_json
@dataclass
class SystemTemplateFilter:
    name: systemtemplatefiltername_enum.SystemTemplateFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
