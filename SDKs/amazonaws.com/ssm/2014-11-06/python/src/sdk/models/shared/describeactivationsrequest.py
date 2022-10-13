from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import describeactivationsfilter


@dataclass_json
@dataclass
class DescribeActivationsRequest:
    filters: Optional[List[describeactivationsfilter.DescribeActivationsFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
