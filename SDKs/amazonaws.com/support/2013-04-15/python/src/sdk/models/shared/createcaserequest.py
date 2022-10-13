from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateCaseRequest:
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentSetId' }})
    category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryCode' }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccEmailAddresses' }})
    communication_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationBody' }})
    issue_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueType' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCode' }})
    severity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityCode' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
