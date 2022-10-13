from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionparameter


@dataclass_json
@dataclass
class DescribeServiceActionExecutionParametersOutput:
    service_action_parameters: Optional[List[executionparameter.ExecutionParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionParameters' }})
    
