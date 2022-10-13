from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterClusterSecurityGroup:
    cluster_security_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterSecurityGroupName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
