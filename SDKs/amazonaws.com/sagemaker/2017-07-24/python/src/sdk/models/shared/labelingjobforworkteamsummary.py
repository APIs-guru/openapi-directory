from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelingJobForWorkteamSummary:
    r"""LabelingJobForWorkteamSummary
    Provides summary information for a work team.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_reference_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobReferenceCode') }})
    work_requester_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkRequesterAccountId') }})
    label_counters: Optional[LabelCountersForWorkteam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelCounters') }})
    labeling_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingJobName') }})
    number_of_human_workers_per_data_object: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfHumanWorkersPerDataObject') }})
    
