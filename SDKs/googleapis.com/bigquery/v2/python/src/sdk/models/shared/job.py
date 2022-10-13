from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobconfiguration
from . import jobreference
from . import jobstatistics
from . import jobstatus


@dataclass_json
@dataclass
class Job:
    configuration: Optional[jobconfiguration.JobConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_reference: Optional[jobreference.JobReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobReference' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    statistics: Optional[jobstatistics.JobStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[jobstatus.JobStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_email' }})
    
