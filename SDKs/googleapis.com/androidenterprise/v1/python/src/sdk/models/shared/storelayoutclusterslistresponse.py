from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storecluster


@dataclass_json
@dataclass
class StoreLayoutClustersListResponse:
    cluster: Optional[List[storecluster.StoreCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    
