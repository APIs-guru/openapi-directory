from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncreaseStreamRetentionPeriodInput:
    r"""IncreaseStreamRetentionPeriodInput
    Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
    """
    
    retention_period_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
