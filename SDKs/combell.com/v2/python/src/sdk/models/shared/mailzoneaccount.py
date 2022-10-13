from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MailZoneAccount:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
