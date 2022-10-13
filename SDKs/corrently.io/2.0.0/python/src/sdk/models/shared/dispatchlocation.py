from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DispatchLocation:
    energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energy' }})
    location: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
