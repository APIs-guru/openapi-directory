from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainConfiguration:
    r"""DomainConfiguration
    Contains the configuration settings of a domain.
    """
    
    workflow_execution_retention_period_in_days: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecutionRetentionPeriodInDays') }})
    
