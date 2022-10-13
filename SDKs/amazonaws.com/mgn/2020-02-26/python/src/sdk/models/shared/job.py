from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import initiatedby_enum
from . import participatingserver
from . import jobstatus_enum
from . import jobtype_enum


@dataclass_json
@dataclass
class Job:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime' }})
    end_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDateTime' }})
    initiated_by: Optional[initiatedby_enum.InitiatedByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedBy' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobID' }})
    participating_servers: Optional[List[participatingserver.ParticipatingServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participatingServers' }})
    status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
