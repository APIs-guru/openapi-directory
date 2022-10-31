from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
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
    anomaly_detector_frequency: Optional[shared.FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorFrequency' }})
    

@dataclass_json
@dataclass
class CreateAnomalyDetectorRequestBody:
    anomaly_detector_config: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorConfig' }})
    anomaly_detector_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorDescription' }})
    anomaly_detector_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorName' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateAnomalyDetectorRequest:
    headers: CreateAnomalyDetectorHeaders = field(default=None)
    request: CreateAnomalyDetectorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAnomalyDetectorResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_anomaly_detector_response: Optional[shared.CreateAnomalyDetectorResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
