from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationrestoreconfiguration
from . import flinkrunconfiguration
from . import sqlrunconfiguration


@dataclass_json
@dataclass
class RunConfiguration:
    application_restore_configuration: Optional[applicationrestoreconfiguration.ApplicationRestoreConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationRestoreConfiguration' }})
    flink_run_configuration: Optional[flinkrunconfiguration.FlinkRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlinkRunConfiguration' }})
    sql_run_configurations: Optional[List[sqlrunconfiguration.SQLRunConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlRunConfigurations' }})
    
