from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cohort


@dataclass_json
@dataclass
class CohortGroup:
    cohorts: Optional[List[cohort.Cohort]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohorts' }})
    lifetime_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifetimeValue' }})
    
