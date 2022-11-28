from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmailMessage:
    r"""EmailMessage
    Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    feedback_forwarding_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingAddress') }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromAddress') }})
    raw_email: Optional[RawEmail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawEmail') }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    simple_email: Optional[SimpleEmail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimpleEmail') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    
