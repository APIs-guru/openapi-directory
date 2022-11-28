from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonitoringStoppingCondition:
    r"""MonitoringStoppingCondition
    A time limit for how long the monitoring job is allowed to run before stopping.
    """
    
    max_runtime_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRuntimeInSeconds') }})
    
