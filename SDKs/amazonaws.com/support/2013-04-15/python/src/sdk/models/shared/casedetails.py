from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recentcasecommunications


@dataclass_json
@dataclass
class CaseDetails:
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryCode' }})
    cc_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ccEmailAddresses' }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayId' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    recent_communications: Optional[recentcasecommunications.RecentCaseCommunications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentCommunications' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceCode' }})
    severity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityCode' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    submitted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedBy' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeCreated' }})
    
