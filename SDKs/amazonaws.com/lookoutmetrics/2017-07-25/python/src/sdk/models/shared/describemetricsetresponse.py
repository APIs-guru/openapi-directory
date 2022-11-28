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
class DescribeMetricSetResponse:
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorArn') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimension_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_list: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricList') }})
    metric_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetArn') }})
    metric_set_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetDescription') }})
    metric_set_frequency: Optional[FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetFrequency') }})
    metric_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetName') }})
    metric_source: Optional[MetricSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSource') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    timestamp_column: Optional[TimestampColumn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampColumn') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    
