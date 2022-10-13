from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationPool:
    installed_net_core_runtimes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installed_net_core_runtimes' }})
    pipeline_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline_mode' }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime' }})
    
