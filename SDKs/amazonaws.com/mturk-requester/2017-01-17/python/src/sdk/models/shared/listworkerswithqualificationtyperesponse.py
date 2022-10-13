from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualification


@dataclass_json
@dataclass
class ListWorkersWithQualificationTypeResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    qualifications: Optional[List[qualification.Qualification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Qualifications' }})
    
