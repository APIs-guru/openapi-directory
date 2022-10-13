from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sessionfilter
from . import sessionstate_enum


@dataclass_json
@dataclass
class DescribeSessionsRequest:
    filters: Optional[List[sessionfilter.SessionFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    state: sessionstate_enum.SessionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
