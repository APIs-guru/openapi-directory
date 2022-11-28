from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMaintenanceWindowExecutionRequest:
    window_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowExecutionId') }})
    
