from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceupdaterequest


@dataclass_json
@dataclass
class BatchUpdateClusterRequest:
    cluster_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterNames' }})
    service_update: Optional[serviceupdaterequest.ServiceUpdateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdate' }})
    
