from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ruletype_enum


@dataclass_json
@dataclass
class RuleConfig:
    inverted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inverted' }})
    threshold: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Threshold' }})
    type: ruletype_enum.RuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
