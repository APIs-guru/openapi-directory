from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alertstatus_enum
from . import alerttype_enum


@dataclass_json
@dataclass
class AlertSummary:
    alert_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertArn' }})
    alert_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertName' }})
    alert_sensitivity_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertSensitivityThreshold' }})
    alert_status: Optional[alertstatus_enum.AlertStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertStatus' }})
    alert_type: Optional[alerttype_enum.AlertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertType' }})
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
