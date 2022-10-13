from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import contactmethodverificationprotocol_enum


@dataclass_json
@dataclass
class SendContactMethodVerificationRequest:
    protocol: contactmethodverificationprotocol_enum.ContactMethodVerificationProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
