from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import flowtemplatefiltername_enum


@dataclass_json
@dataclass
class FlowTemplateFilter:
    name: flowtemplatefiltername_enum.FlowTemplateFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
