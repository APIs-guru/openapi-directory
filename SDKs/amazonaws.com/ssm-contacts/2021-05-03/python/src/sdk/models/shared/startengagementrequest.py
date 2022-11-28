from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartEngagementRequest:
    contact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    sender: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncidentId') }})
    public_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicContent') }})
    public_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicSubject') }})
    
