from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import intentfiltername_enum
from . import intentfilteroperator_enum


@dataclass_json
@dataclass
class IntentFilter:
    name: intentfiltername_enum.IntentFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: intentfilteroperator_enum.IntentFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
