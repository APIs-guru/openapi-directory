from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Config:
    cmek_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmekKeyName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
