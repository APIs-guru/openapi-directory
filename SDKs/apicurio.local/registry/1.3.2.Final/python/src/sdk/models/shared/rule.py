from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ruletype_enum


@dataclass_json
@dataclass
class Rule:
    config: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    type: Optional[ruletype_enum.RuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
