from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobconfiguration
from . import errorproto
from . import jobreference
from . import jobstatistics
from . import jobstatus


@dataclass_json
@dataclass
class JobListJobs:
    configuration: Optional[jobconfiguration.JobConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    error_result: Optional[errorproto.ErrorProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorResult' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_reference: Optional[jobreference.JobReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobReference' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    statistics: Optional[jobstatistics.JobStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[jobstatus.JobStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_email' }})
    

@dataclass_json
@dataclass
class JobList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    jobs: Optional[List[JobListJobs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
