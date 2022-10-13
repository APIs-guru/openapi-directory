from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateMailboxQuotaRequest:
    mailbox_quota: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailboxQuota' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
