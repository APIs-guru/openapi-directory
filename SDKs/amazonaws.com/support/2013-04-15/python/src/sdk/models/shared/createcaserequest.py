from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateCaseRequest:
    communication_body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationBody') }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSetId') }})
    category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryCode') }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddresses') }})
    issue_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueType') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    severity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityCode') }})
    
