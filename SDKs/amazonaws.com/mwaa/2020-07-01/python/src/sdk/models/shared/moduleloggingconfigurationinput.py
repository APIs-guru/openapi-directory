from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModuleLoggingConfigurationInput:
    r"""ModuleLoggingConfigurationInput
    Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    log_level: LoggingLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
