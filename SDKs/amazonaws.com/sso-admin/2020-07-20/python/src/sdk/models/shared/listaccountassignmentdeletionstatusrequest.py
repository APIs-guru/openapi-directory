from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operationstatusfilter


@dataclass_json
@dataclass
class ListAccountAssignmentDeletionStatusRequest:
    filter: Optional[operationstatusfilter.OperationStatusFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
