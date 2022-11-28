from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunConfigurationDescription:
    r"""RunConfigurationDescription
    Describes the starting properties for a Kinesis Data Analytics application.
    """
    
    application_restore_configuration_description: Optional[ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfigurationDescription') }})
    flink_run_configuration_description: Optional[FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfigurationDescription') }})
    
