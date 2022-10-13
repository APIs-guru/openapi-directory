from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcomparator_enum
from . import tagcriterionpairforjob


@dataclass_json
@dataclass
class TagCriterionForJob:
    comparator: Optional[jobcomparator_enum.JobComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    tag_values: Optional[List[tagcriterionpairforjob.TagCriterionPairForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    
