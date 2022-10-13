from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import predicatetype_enum


@dataclass_json
@dataclass
class Predicate:
    data_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataId' }})
    negated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Negated' }})
    type: predicatetype_enum.PredicateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
