from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcomparator_enum
from . import listjobsfilterkey_enum


@dataclass_json
@dataclass
class ListJobsFilterTerm:
    comparator: Optional[jobcomparator_enum.JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[listjobsfilterkey_enum.ListJobsFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
