from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationjob
from . import replicationrun


@dataclass_json
@dataclass
class GetReplicationRunsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    replication_job: Optional[replicationjob.ReplicationJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJob' }})
    replication_run_list: Optional[List[replicationrun.ReplicationRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationRunList' }})
    
