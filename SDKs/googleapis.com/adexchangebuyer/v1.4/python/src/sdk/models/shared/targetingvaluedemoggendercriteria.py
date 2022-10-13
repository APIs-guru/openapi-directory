from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetingValueDemogGenderCriteria:
    demog_gender_criteria_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demogGenderCriteriaIds' }})
    
