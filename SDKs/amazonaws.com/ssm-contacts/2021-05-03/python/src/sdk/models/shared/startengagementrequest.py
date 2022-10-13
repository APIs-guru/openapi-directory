from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartEngagementRequest:
    contact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactId' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncidentId' }})
    public_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicContent' }})
    public_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicSubject' }})
    sender: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sender' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
