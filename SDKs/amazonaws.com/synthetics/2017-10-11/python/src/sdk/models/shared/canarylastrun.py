from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import canaryrun


@dataclass_json
@dataclass
class CanaryLastRun:
    canary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanaryName' }})
    last_run: Optional[canaryrun.CanaryRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRun' }})
    
