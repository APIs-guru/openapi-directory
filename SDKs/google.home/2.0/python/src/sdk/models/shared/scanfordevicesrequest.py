from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScanfordevicesRequest:
    clear_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clear_results' }})
    enable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
