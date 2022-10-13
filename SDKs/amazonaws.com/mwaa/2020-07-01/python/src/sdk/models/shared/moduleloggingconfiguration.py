from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import logginglevel_enum


@dataclass_json
@dataclass
class ModuleLoggingConfiguration:
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogGroupArn' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    log_level: Optional[logginglevel_enum.LoggingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevel' }})
    
