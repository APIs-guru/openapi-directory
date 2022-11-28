from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringConfigurationUpdate:
    r"""MonitoringConfigurationUpdate
    Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
    """
    
    configuration_type_update: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationTypeUpdate') }})
    log_level_update: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevelUpdate') }})
    metrics_level_update: Optional[MetricsLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsLevelUpdate') }})
    
