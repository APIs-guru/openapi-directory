from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationstatustype


@dataclass_json
@dataclass
class RemoveRegionsFromReplicationResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    replication_status: Optional[List[replicationstatustype.ReplicationStatusType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationStatus' }})
    
