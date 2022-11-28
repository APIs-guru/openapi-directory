from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModuleLoggingConfiguration:
    r"""ModuleLoggingConfiguration
    Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
    """
    
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupArn') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    log_level: Optional[LoggingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
