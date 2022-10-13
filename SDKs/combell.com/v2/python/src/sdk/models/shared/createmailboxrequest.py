from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMailboxRequest:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
