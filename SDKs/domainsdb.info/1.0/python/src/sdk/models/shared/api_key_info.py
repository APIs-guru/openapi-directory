from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKeyInfo:
    customer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_email' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_name' }})
    expires: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_id' }})
    item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_name' }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    license_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_limit' }})
    price_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_id' }})
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
