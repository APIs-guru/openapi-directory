from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetKeyRotationStatusResponse:
    key_rotation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyRotationEnabled' }})
    
