from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationrestoreconfiguration
from . import flinkrunconfiguration


@dataclass_json
@dataclass
class RunConfigurationDescription:
    application_restore_configuration_description: Optional[applicationrestoreconfiguration.ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationRestoreConfigurationDescription' }})
    flink_run_configuration_description: Optional[flinkrunconfiguration.FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkRunConfigurationDescription' }})
    
