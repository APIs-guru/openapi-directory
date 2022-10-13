from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cluster
from . import unprocessedcluster


@dataclass_json
@dataclass
class BatchUpdateClusterResponse:
    processed_clusters: Optional[List[cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessedClusters' }})
    unprocessed_clusters: Optional[List[unprocessedcluster.UnprocessedCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedClusters' }})
    
