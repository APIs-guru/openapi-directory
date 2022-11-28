from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringConfigurationDescription:
    r"""MonitoringConfigurationDescription
    Describes configuration parameters for CloudWatch logging for an application.
    """
    
    configuration_type: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    log_level: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    metrics_level: Optional[MetricsLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsLevel') }})
    
