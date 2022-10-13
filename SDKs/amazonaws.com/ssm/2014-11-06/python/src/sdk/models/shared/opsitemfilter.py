from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import opsitemfilterkey_enum
from . import opsitemfilteroperator_enum


@dataclass_json
@dataclass
class OpsItemFilter:
    key: opsitemfilterkey_enum.OpsItemFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    operator: opsitemfilteroperator_enum.OpsItemFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
