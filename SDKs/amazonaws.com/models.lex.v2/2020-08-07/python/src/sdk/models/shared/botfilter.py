from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import botfiltername_enum
from . import botfilteroperator_enum


@dataclass_json
@dataclass
class BotFilter:
    name: botfiltername_enum.BotFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: botfilteroperator_enum.BotFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
