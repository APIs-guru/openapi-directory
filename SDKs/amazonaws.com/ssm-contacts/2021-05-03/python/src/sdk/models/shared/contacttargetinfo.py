from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContactTargetInfo:
    r"""ContactTargetInfo
    The contact that Incident Manager is engaging during an incident.
    """
    
    is_essential: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsEssential') }})
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    
