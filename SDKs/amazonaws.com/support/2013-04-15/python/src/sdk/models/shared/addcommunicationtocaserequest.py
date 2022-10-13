from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddCommunicationToCaseRequest:
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentSetId' }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccEmailAddresses' }})
    communication_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationBody' }})
    
