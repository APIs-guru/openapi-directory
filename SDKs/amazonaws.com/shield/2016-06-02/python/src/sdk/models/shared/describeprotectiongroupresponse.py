from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import protectiongroup


@dataclass_json
@dataclass
class DescribeProtectionGroupResponse:
    protection_group: protectiongroup.ProtectionGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionGroup' }})
    
