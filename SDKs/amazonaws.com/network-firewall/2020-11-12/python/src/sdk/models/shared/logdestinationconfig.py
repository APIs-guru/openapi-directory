from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import logdestinationtype_enum
from . import logtype_enum


@dataclass_json
@dataclass
class LogDestinationConfig:
    log_destination: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogDestination' }})
    log_destination_type: logdestinationtype_enum.LogDestinationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogDestinationType' }})
    log_type: logtype_enum.LogTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogType' }})
    
