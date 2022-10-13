from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ecscluster


@dataclass_json
@dataclass
class DescribeEcsClustersResult:
    ecs_clusters: Optional[List[ecscluster.EcsCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EcsClusters' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
