from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    duration_histogram: Optional[List[HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationHistogram') }})
    edges: Optional[List[Edge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edges') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    response_time_histogram: Optional[List[HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTimeHistogram') }})
    root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Root') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    summary_statistics: Optional[ServiceStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SummaryStatistics') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
