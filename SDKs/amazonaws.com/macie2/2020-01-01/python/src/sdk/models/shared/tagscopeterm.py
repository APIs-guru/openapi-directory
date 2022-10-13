from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcomparator_enum
from . import tagvaluepair
from . import tagtarget_enum


@dataclass_json
@dataclass
class TagScopeTerm:
    comparator: Optional[jobcomparator_enum.JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    tag_values: Optional[List[tagvaluepair.TagValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    target: Optional[tagtarget_enum.TagTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
