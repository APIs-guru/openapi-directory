from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2SecurityGroupUserIDGroupPair:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    peering_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeeringStatus' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    vpc_peering_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringConnectionId' }})
    
