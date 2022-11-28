from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class As2Transport:
    r"""As2Transport
    Describes a single AS2 connection in all of it variations
    """
    
    receiver_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverId') }})
    receiver_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverUrl') }})
    sender_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderId') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    content_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDescription') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderEmail') }})
    
