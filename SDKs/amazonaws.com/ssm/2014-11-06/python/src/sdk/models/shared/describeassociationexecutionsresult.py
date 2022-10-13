from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationexecution


@dataclass_json
@dataclass
class DescribeAssociationExecutionsResult:
    association_executions: Optional[List[associationexecution.AssociationExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationExecutions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
