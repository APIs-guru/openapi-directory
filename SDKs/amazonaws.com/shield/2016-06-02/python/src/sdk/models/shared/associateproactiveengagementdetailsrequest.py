from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import emergencycontact


@dataclass_json
@dataclass
class AssociateProactiveEngagementDetailsRequest:
    emergency_contact_list: List[emergencycontact.EmergencyContact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmergencyContactList' }})
    
