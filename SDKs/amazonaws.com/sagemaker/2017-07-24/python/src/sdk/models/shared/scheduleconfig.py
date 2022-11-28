from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleConfig:
    r"""ScheduleConfig
    Configuration details about the monitoring schedule.
    """
    
    schedule_expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleExpression') }})
    
