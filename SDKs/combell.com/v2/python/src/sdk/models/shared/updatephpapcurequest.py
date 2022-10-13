from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePhpAPcuRequest:
    apcu_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apcu_size' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
