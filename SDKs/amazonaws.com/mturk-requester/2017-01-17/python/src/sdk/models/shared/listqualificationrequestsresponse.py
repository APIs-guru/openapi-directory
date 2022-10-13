from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualificationrequest


@dataclass_json
@dataclass
class ListQualificationRequestsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    qualification_requests: Optional[List[qualificationrequest.QualificationRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationRequests' }})
    
