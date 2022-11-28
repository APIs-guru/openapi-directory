from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrialComponentMetricSummary:
    r"""TrialComponentMetricSummary
    A summary of the metrics of a trial component.
    """
    
    avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Avg') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    last: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Last') }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Min') }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    std_dev: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StdDev') }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeStamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
