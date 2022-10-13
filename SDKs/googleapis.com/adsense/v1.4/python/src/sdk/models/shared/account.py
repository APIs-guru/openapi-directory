from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class Account:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_time' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    premium: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'premium' }})
    sub_accounts: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAccounts' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
