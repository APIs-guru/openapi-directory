from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import plan


@dataclass_json
@dataclass
class UpdateContactRequest:
    contact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    plan: Optional[plan.Plan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plan' }})
    
