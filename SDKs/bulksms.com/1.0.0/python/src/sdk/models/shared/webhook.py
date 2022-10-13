from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Webhook:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    contact_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmailAddress' }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_web_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onWebApp' }})
    trigger_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerScope' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
