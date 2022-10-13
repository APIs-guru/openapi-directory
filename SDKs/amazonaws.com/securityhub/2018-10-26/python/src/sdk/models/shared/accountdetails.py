from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountDetails:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    
