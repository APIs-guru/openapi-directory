from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationexecutiontargetsfilter


@dataclass_json
@dataclass
class DescribeAssociationExecutionTargetsRequest:
    association_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    filters: Optional[List[associationexecutiontargetsfilter.AssociationExecutionTargetsFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
