from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import logginglevel_enum


@dataclass_json
@dataclass
class ModuleLoggingConfigurationInput:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    log_level: logginglevel_enum.LoggingLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevel' }})
    
