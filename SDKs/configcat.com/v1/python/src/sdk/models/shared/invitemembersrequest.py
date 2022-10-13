from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InviteMembersRequest:
    emails: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    permission_group_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionGroupId' }})
    
