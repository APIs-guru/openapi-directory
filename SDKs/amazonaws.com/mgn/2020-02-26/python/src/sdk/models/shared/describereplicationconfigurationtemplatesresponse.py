from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationconfigurationtemplate


@dataclass_json
@dataclass
class DescribeReplicationConfigurationTemplatesResponse:
    items: Optional[List[replicationconfigurationtemplate.ReplicationConfigurationTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
