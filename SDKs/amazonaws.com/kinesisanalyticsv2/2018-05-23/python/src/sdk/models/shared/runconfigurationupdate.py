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
class RunConfigurationUpdate:
    r"""RunConfigurationUpdate
    Describes the updates to the starting parameters for a Kinesis Data Analytics application.
    """
    
    application_restore_configuration: Optional[ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfiguration') }})
    flink_run_configuration: Optional[FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfiguration') }})
    
