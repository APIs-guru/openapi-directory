from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAnomalyDetectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig:
    r"""CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
    Contains information about a detector's configuration.
    """
    
    anomaly_detector_frequency: Optional[shared.FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorFrequency') }})
    

@dataclass_json
@dataclass
class CreateAnomalyDetectorRequestBody:
    anomaly_detector_config: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorConfig') }})
    anomaly_detector_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorName') }})
    anomaly_detector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorDescription') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateAnomalyDetectorRequest:
    headers: CreateAnomalyDetectorHeaders = field()
    request: CreateAnomalyDetectorRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAnomalyDetectorResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_anomaly_detector_response: Optional[shared.CreateAnomalyDetectorResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
