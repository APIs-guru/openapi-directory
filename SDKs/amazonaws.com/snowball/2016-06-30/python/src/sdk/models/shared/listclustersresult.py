from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clusterlistentry


@dataclass_json
@dataclass
class ListClustersResult:
    cluster_list_entries: Optional[List[clusterlistentry.ClusterListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterListEntries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
