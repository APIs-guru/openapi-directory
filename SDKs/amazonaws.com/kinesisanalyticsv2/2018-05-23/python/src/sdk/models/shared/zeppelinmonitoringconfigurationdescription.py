from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZeppelinMonitoringConfigurationDescription:
    r"""ZeppelinMonitoringConfigurationDescription
    The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
    """
    
    log_level: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
