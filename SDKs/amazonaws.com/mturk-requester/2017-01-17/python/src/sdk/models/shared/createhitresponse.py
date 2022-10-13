from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hit


@dataclass_json
@dataclass
class CreateHitResponse:
    hit: Optional[hit.Hit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HIT' }})
    
