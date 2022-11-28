from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Alert:
    r"""Alert
    A configuration for Amazon SNS-integrated notifications.
    """
    
    action: Optional[Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    alert_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertArn') }})
    alert_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertDescription') }})
    alert_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertName') }})
    alert_sensitivity_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertSensitivityThreshold') }})
    alert_status: Optional[AlertStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertStatus') }})
    alert_type: Optional[AlertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertType') }})
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorArn') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
