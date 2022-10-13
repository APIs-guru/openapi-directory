from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CPUOptions:
    core_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreCount' }})
    threads_per_core: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadsPerCore' }})
    
