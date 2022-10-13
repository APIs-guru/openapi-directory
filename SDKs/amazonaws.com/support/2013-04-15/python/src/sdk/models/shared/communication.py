from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachmentdetails


@dataclass_json
@dataclass
class Communication:
    attachment_set: Optional[List[attachmentdetails.AttachmentDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentSet' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    submitted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedBy' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeCreated' }})
    
