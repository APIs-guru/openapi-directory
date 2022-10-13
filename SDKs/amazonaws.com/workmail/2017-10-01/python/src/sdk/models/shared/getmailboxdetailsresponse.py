from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMailboxDetailsResponse:
    mailbox_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailboxQuota' }})
    mailbox_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailboxSize' }})
    
