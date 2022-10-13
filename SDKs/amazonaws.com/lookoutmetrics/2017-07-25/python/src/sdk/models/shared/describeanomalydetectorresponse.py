from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import anomalydetectorconfigsummary
from . import anomalydetectorstatus_enum


@dataclass_json
@dataclass
class DescribeAnomalyDetectorResponse:
    anomaly_detector_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    anomaly_detector_config: Optional[anomalydetectorconfigsummary.AnomalyDetectorConfigSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorConfig' }})
    anomaly_detector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorDescription' }})
    anomaly_detector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[anomalydetectorstatus_enum.AnomalyDetectorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
