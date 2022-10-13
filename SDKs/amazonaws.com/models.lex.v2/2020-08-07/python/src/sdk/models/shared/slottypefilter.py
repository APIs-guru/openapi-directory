from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import slottypefiltername_enum
from . import slottypefilteroperator_enum


@dataclass_json
@dataclass
class SlotTypeFilter:
    name: slottypefiltername_enum.SlotTypeFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: slottypefilteroperator_enum.SlotTypeFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
