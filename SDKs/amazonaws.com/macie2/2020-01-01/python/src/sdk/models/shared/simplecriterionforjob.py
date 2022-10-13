from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcomparator_enum
from . import simplecriterionkeyforjob_enum


@dataclass_json
@dataclass
class SimpleCriterionForJob:
    comparator: Optional[jobcomparator_enum.JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[simplecriterionkeyforjob_enum.SimpleCriterionKeyForJobEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
