from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAlertHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAlertRequestBodyAction:
    r"""CreateAlertRequestBodyAction
    A configuration that specifies the action to perform when anomalies are detected.
    """
    
    lambda_configuration: Optional[shared.LambdaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfiguration') }})
    sns_configuration: Optional[shared.SnsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSConfiguration') }})
    

@dataclass_json
@dataclass
class CreateAlertRequestBody:
    action: CreateAlertRequestBodyAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    alert_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertName') }})
    alert_sensitivity_threshold: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertSensitivityThreshold') }})
    anomaly_detector_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorArn') }})
    alert_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertDescription') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateAlertRequest:
    headers: CreateAlertHeaders = field()
    request: CreateAlertRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAlertResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_alert_response: Optional[shared.CreateAlertResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
