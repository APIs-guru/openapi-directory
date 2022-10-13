from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvUpdateIntentStrongResponse:
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentId' }})
    intent_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
