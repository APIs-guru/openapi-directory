from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeSnapshotsRequest:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    show_detail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShowDetail' }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
