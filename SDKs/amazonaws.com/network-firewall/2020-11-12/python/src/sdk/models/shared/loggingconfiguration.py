from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import logdestinationconfig


@dataclass_json
@dataclass
class LoggingConfiguration:
    log_destination_configs: List[logdestinationconfig.LogDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogDestinationConfigs' }})
    
