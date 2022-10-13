from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import criteriaforjob


@dataclass_json
@dataclass
class CriteriaBlockForJob:
    and_: Optional[List[criteriaforjob.CriteriaForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'and' }})
    
