from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelcountersforworkteam


@dataclass_json
@dataclass
class LabelingJobForWorkteamSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_reference_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobReferenceCode' }})
    label_counters: Optional[labelcountersforworkteam.LabelCountersForWorkteam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelCounters' }})
    labeling_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingJobName' }})
    number_of_human_workers_per_data_object: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfHumanWorkersPerDataObject' }})
    work_requester_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkRequesterAccountId' }})
    
