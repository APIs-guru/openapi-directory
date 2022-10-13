from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCasesRequest:
    after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterTime' }})
    before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeTime' }})
    case_id_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseIdList' }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayId' }})
    include_communications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeCommunications' }})
    include_resolved_cases: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeResolvedCases' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
