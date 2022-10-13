from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCommunicationsRequest:
    after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterTime' }})
    before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeTime' }})
    case_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
