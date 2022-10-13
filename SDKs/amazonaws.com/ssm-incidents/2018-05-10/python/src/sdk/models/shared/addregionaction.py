from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddRegionAction:
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sseKmsKeyId' }})
    
