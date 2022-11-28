from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamplingStatisticSummary:
    r"""SamplingStatisticSummary
    Aggregated request sampling data for a sampling rule across all services for a 10-second window.
    """
    
    borrow_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorrowCount') }})
    request_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestCount') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    sampled_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampledCount') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
