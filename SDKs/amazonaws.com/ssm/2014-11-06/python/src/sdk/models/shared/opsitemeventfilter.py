from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import opsitemeventfilterkey_enum
from . import opsitemeventfilteroperator_enum


@dataclass_json
@dataclass
class OpsItemEventFilter:
    key: opsitemeventfilterkey_enum.OpsItemEventFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    operator: opsitemeventfilteroperator_enum.OpsItemEventFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
