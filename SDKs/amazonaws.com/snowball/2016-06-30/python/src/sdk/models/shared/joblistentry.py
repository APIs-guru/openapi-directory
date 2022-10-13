from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobstate_enum
from . import jobtype_enum
from . import snowballtype_enum


@dataclass_json
@dataclass
class JobListEntry:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_master: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMaster' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_state: Optional[jobstate_enum.JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobState' }})
    job_type: Optional[jobtype_enum.JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobType' }})
    snowball_type: Optional[snowballtype_enum.SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    
