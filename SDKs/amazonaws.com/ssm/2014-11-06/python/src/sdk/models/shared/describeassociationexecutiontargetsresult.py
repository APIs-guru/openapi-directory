from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationexecutiontarget


@dataclass_json
@dataclass
class DescribeAssociationExecutionTargetsResult:
    association_execution_targets: Optional[List[associationexecutiontarget.AssociationExecutionTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationExecutionTargets' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
