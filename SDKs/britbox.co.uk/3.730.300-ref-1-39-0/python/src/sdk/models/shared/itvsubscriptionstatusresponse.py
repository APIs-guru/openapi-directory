from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvSubscriptionStatusResponse:
    is_active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    
