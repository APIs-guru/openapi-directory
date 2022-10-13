from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import savingsplansfiltername_enum


@dataclass_json
@dataclass
class SavingsPlanFilter:
    name: Optional[savingsplansfiltername_enum.SavingsPlansFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
