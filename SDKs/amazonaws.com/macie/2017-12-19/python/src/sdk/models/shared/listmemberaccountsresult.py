from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMemberAccountsResult:
    member_accounts: Optional[List[MemberAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberAccounts') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
