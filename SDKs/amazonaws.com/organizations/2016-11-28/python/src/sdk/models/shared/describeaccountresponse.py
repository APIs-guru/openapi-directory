from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class DescribeAccountResponse:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    
