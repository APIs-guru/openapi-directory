from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMailboxDetailsResponse:
    mailbox_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailboxQuota') }})
    mailbox_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailboxSize') }})
    
