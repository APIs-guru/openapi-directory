from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlinkApplicationConfigurationUpdate:
    r"""FlinkApplicationConfigurationUpdate
    Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_configuration_update: Optional[CheckpointConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfigurationUpdate') }})
    monitoring_configuration_update: Optional[MonitoringConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationUpdate') }})
    parallelism_configuration_update: Optional[ParallelismConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfigurationUpdate') }})
    
