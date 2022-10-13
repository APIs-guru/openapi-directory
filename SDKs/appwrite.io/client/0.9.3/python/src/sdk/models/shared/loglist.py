from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import log


@dataclass_json
@dataclass
class LogList:
    logs: List[log.Log] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    
