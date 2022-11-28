from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    Defines how AWS Network Firewall performs logging for a <a>Firewall</a>. 
    """
    
    log_destination_configs: List[LogDestinationConfig] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDestinationConfigs') }})
    
