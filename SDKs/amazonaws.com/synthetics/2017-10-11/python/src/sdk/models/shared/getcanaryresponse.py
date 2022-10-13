from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import canary


@dataclass_json
@dataclass
class GetCanaryResponse:
    canary: Optional[canary.Canary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Canary' }})
    
