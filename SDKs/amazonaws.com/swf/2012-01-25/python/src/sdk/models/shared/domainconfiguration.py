from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainConfiguration:
    workflow_execution_retention_period_in_days: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecutionRetentionPeriodInDays' }})
    
