from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppEdit:
    expiry_time_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryTimeSeconds' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
