from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clusterendpoint
from . import status_enum


@dataclass_json
@dataclass
class Cluster:
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterArn' }})
    cluster_endpoints: Optional[List[clusterendpoint.ClusterEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpoints' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
