from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import predicate


@dataclass_json
@dataclass
class RuleUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    predicate: predicate.Predicate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predicate' }})
    
