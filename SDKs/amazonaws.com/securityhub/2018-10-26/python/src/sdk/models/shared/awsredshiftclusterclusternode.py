from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterNode:
    node_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeRole' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateIpAddress' }})
    public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIpAddress' }})
    
