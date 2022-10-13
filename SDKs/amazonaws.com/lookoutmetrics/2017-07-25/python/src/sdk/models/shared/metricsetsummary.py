from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricSetSummary:
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetArn' }})
    metric_set_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetDescription' }})
    metric_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
