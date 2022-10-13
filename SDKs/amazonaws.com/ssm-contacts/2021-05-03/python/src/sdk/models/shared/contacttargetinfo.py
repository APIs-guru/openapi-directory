from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContactTargetInfo:
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactId' }})
    is_essential: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsEssential' }})
    
