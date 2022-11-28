from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FlinkRunConfiguration:
    r"""FlinkRunConfiguration
    Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    allow_non_restored_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowNonRestoredState') }})
    
