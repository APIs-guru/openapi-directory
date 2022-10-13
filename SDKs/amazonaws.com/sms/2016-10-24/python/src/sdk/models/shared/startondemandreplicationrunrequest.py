from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartOnDemandReplicationRunRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    replication_job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJobId' }})
    
