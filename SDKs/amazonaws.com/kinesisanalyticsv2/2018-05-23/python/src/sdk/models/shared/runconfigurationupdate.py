from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationrestoreconfiguration
from . import flinkrunconfiguration


@dataclass_json
@dataclass
class RunConfigurationUpdate:
    application_restore_configuration: Optional[applicationrestoreconfiguration.ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationRestoreConfiguration' }})
    flink_run_configuration: Optional[flinkrunconfiguration.FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkRunConfiguration' }})
    
