from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberaccount


@dataclass_json
@dataclass
class ListMemberAccountsResult:
    member_accounts: Optional[List[memberaccount.MemberAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberAccounts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
