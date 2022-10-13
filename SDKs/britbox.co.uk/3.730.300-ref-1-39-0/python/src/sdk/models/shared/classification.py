from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Classification:
    advisory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advisoryText' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    images: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    system: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    
