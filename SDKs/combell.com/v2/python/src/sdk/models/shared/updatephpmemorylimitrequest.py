from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePhpMemoryLimitRequest:
    memory_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory_limit' }})
    
