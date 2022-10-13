from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisassociateMemberFromGroupRequest:
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    member_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberId' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
