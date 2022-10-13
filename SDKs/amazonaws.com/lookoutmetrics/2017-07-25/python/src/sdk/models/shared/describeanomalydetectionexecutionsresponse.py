from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionstatus


@dataclass_json
@dataclass
class DescribeAnomalyDetectionExecutionsResponse:
    execution_list: Optional[List[executionstatus.ExecutionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
