from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GiftDetails:
    r"""GiftDetails
    This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    recipient_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipientEmail') }})
    sender_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderName') }})
    
