from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddCommunicationToCaseRequest:
    communication_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationBody') }})
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSetId') }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddresses') }})
    
