from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicKey:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bits' }})
    
