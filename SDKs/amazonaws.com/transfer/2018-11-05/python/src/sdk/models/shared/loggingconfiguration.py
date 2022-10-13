from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoggingConfiguration:
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroupName' }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingRole' }})
    
