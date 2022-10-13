from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import studiomembership


@dataclass_json
@dataclass
class GetStudioMemberResponse:
    member: Optional[studiomembership.StudioMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    
