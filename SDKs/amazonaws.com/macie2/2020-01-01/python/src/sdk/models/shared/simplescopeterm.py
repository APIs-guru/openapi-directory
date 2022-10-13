from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcomparator_enum
from . import scopefilterkey_enum


@dataclass_json
@dataclass
class SimpleScopeTerm:
    comparator: Optional[jobcomparator_enum.JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[scopefilterkey_enum.ScopeFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
