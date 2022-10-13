from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationjob


@dataclass_json
@dataclass
class GetReplicationJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    replication_job_list: Optional[List[replicationjob.ReplicationJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationJobList' }})
    
