from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmergencyContact:
    r"""EmergencyContact
    Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
    """
    
    email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    contact_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactNotes') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    
