from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompatibleImage:
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
