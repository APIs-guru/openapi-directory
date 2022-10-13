from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import replicationset


@dataclass_json
@dataclass
class GetReplicationSetOutput:
    replication_set: replicationset.ReplicationSet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationSet' }})
    
