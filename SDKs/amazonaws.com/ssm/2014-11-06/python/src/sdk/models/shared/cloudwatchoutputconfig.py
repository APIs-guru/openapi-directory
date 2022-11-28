from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudWatchOutputConfig:
    r"""CloudWatchOutputConfig
    Configuration options for sending command output to Amazon CloudWatch Logs.
    """
    
    cloud_watch_log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupName') }})
    cloud_watch_output_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchOutputEnabled') }})
    
