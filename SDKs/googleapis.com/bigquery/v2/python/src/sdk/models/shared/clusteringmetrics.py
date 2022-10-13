from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cluster


@dataclass_json
@dataclass
class ClusteringMetrics:
    clusters: Optional[List[cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    davies_bouldin_index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daviesBouldinIndex' }})
    mean_squared_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSquaredDistance' }})
    
