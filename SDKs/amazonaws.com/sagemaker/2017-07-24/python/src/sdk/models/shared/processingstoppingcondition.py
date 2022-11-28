from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProcessingStoppingCondition:
    r"""ProcessingStoppingCondition
    Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
    """
    
    max_runtime_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRuntimeInSeconds') }})
    
