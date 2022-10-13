from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import loglevel_enum


@dataclass_json
@dataclass
class ZeppelinMonitoringConfiguration:
    log_level: loglevel_enum.LogLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogLevel' }})
    
