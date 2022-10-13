from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationstatustype


@dataclass_json
@dataclass
class CreateSecretResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    replication_status: Optional[List[replicationstatustype.ReplicationStatusType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationStatus' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    
