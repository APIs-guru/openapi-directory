from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmergencyContact:
    contact_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactNotes' }})
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    
