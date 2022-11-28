from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZeppelinMonitoringConfiguration:
    r"""ZeppelinMonitoringConfiguration
    Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html\">Monitoring</a>.
    """
    
    log_level: LogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
