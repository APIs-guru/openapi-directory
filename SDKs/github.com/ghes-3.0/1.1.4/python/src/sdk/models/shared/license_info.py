from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LicenseInfo:
    days_until_expiration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_until_expiration' }})
    expire_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_at' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    seats: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats' }})
    seats_available: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats_available' }})
    seats_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats_used' }})
    
