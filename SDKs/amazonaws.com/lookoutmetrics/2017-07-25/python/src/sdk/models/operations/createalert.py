from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAlertHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateAlertRequestBodyAction:
    lambda_configuration: Optional[shared.LambdaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaConfiguration' }})
    sns_configuration: Optional[shared.SnsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SNSConfiguration' }})
    

@dataclass_json
@dataclass
class CreateAlertRequestBody:
    action: CreateAlertRequestBodyAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    alert_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertDescription' }})
    alert_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertName' }})
    alert_sensitivity_threshold: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlertSensitivityThreshold' }})
    anomaly_detector_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateAlertRequest:
    headers: CreateAlertHeaders = field(default=None)
    request: CreateAlertRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAlertResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_alert_response: Optional[shared.CreateAlertResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
