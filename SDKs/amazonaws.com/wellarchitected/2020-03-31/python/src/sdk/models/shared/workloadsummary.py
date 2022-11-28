from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkloadSummary:
    r"""WorkloadSummary
    A workload summary return object.
    """
    
    improvement_status: Optional[WorkloadImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementStatus') }})
    lenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lenses') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskCounts') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadArn') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadName') }})
    
