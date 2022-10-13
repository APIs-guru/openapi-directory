from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcetag


@dataclass_json
@dataclass
class RegisterDomainInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[resourcetag.ResourceTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    workflow_execution_retention_period_in_days: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionRetentionPeriodInDays' }})
    
