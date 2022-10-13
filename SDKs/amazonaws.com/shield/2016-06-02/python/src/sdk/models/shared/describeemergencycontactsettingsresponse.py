from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import emergencycontact


@dataclass_json
@dataclass
class DescribeEmergencyContactSettingsResponse:
    emergency_contact_list: Optional[List[emergencycontact.EmergencyContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmergencyContactList' }})
    
