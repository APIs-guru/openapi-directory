from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualificationtype


@dataclass_json
@dataclass
class ListQualificationTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    qualification_types: Optional[List[qualificationtype.QualificationType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypes' }})
    
