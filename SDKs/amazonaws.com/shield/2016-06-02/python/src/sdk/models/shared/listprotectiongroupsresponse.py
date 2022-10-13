from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protectiongroup


@dataclass_json
@dataclass
class ListProtectionGroupsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    protection_groups: List[protectiongroup.ProtectionGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionGroups' }})
    
