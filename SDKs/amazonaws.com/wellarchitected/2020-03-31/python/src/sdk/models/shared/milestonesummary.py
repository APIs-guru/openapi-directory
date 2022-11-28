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
class MilestoneSummary:
    r"""MilestoneSummary
    A milestone summary return object.
    """
    
    milestone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneName') }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    recorded_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload_summary: Optional[WorkloadSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadSummary') }})
    
