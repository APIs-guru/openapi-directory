from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metric
from . import frequency_enum
from . import metricsource
from . import timestampcolumn


@dataclass_json
@dataclass
class DescribeMetricSetResponse:
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimension_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionList' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_list: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricList' }})
    metric_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetArn' }})
    metric_set_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetDescription' }})
    metric_set_frequency: Optional[frequency_enum.FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetFrequency' }})
    metric_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetName' }})
    metric_source: Optional[metricsource.MetricSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSource' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Offset' }})
    timestamp_column: Optional[timestampcolumn.TimestampColumn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampColumn' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    
