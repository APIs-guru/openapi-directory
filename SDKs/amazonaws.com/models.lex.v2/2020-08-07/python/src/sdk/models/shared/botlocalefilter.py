from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import botlocalefiltername_enum
from . import botlocalefilteroperator_enum


@dataclass_json
@dataclass
class BotLocaleFilter:
    name: botlocalefiltername_enum.BotLocaleFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: botlocalefilteroperator_enum.BotLocaleFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
