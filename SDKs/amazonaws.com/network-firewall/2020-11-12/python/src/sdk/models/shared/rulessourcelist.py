from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import generatedrulestype_enum
from . import targettype_enum


@dataclass_json
@dataclass
class RulesSourceList:
    generated_rules_type: generatedrulestype_enum.GeneratedRulesTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeneratedRulesType' }})
    target_types: List[targettype_enum.TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTypes' }})
    targets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
