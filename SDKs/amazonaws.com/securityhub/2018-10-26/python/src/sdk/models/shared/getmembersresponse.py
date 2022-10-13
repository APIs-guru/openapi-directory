from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import member
from . import result


@dataclass_json
@dataclass
class GetMembersResponse:
    members: Optional[List[member.Member]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Members' }})
    unprocessed_accounts: Optional[List[result.Result]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedAccounts' }})
    
