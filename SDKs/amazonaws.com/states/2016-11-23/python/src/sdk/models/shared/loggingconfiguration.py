from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import logdestination
from . import loglevel_enum


@dataclass_json
@dataclass
class LoggingConfiguration:
    destinations: Optional[List[logdestination.LogDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    include_execution_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeExecutionData' }})
    level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    
