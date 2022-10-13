from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobstate_enum


@dataclass_json
@dataclass
class Notification:
    job_states_to_notify: Optional[List[jobstate_enum.JobStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatesToNotify' }})
    notify_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotifyAll' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicARN' }})
    
