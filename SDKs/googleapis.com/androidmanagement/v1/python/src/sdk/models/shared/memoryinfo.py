from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemoryInfo:
    total_internal_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalInternalStorage' }})
    total_ram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRam' }})
    
