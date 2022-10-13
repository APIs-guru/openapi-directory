from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import systeminstancefiltername_enum


@dataclass_json
@dataclass
class SystemInstanceFilter:
    name: Optional[systeminstancefiltername_enum.SystemInstanceFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
