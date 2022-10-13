from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rawemail
from . import simpleemail


@dataclass_json
@dataclass
class EmailMessage:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    feedback_forwarding_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackForwardingAddress' }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromAddress' }})
    raw_email: Optional[rawemail.RawEmail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawEmail' }})
    reply_to_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplyToAddresses' }})
    simple_email: Optional[simpleemail.SimpleEmail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SimpleEmail' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    
