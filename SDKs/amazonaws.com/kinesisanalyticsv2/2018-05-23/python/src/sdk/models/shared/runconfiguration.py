from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunConfiguration:
    r"""RunConfiguration
    Describes the starting parameters for an Kinesis Data Analytics application.
    """
    
    application_restore_configuration: Optional[ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfiguration') }})
    flink_run_configuration: Optional[FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfiguration') }})
    sql_run_configurations: Optional[List[SQLRunConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlRunConfigurations') }})
    
