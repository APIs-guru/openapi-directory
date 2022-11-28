from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateStandardsControlPathParams:
    standards_control_arn: str = field(metadata={'path_param': { 'field_name': 'StandardsControlArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStandardsControlHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateStandardsControlRequestBodyControlStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateStandardsControlRequestBody:
    control_status: Optional[UpdateStandardsControlRequestBodyControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlStatus') }})
    disabled_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisabledReason') }})
    

@dataclass
class UpdateStandardsControlRequest:
    headers: UpdateStandardsControlHeaders = field()
    path_params: UpdateStandardsControlPathParams = field()
    request: UpdateStandardsControlRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStandardsControlResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_standards_control_response: Optional[dict[str, Any]] = field(default=None)
    
