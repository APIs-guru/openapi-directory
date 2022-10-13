from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instance


@dataclass_json
@dataclass
class GetInstanceResponse:
    instance: Optional[instance.Instance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instance' }})
    
