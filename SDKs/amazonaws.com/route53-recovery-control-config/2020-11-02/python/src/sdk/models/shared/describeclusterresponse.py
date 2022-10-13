from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cluster


@dataclass_json
@dataclass
class DescribeClusterResponse:
    cluster: Optional[cluster.Cluster] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cluster' }})
    
