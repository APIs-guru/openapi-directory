from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clustermetadata


@dataclass_json
@dataclass
class DescribeClusterResult:
    cluster_metadata: Optional[clustermetadata.ClusterMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterMetadata' }})
    
