from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filtercondition


@dataclass_json
@dataclass
class ListResourcesRequest:
    filter_condition_list: Optional[List[filtercondition.FilterCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterConditionList' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
