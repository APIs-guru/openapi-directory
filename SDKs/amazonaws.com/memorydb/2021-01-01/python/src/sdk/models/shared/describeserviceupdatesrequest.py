from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import serviceupdatestatus_enum


@dataclass_json
@dataclass
class DescribeServiceUpdatesRequest:
    cluster_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterNames' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_update_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceUpdateName' }})
    status: Optional[List[serviceupdatestatus_enum.ServiceUpdateStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
