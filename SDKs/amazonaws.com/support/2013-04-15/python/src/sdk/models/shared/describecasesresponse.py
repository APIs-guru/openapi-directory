from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import casedetails


@dataclass_json
@dataclass
class DescribeCasesResponse:
    cases: Optional[List[casedetails.CaseDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
