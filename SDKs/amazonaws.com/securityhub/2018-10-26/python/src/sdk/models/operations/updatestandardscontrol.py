from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateStandardsControlPathParams:
    standards_control_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'StandardsControlArn', 'style': 'simple', 'explode': False }})
    

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
    control_status: Optional[UpdateStandardsControlRequestBodyControlStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ControlStatus' }})
    disabled_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledReason' }})
    

@dataclass
class UpdateStandardsControlRequest:
    path_params: UpdateStandardsControlPathParams = field(default=None)
    headers: UpdateStandardsControlHeaders = field(default=None)
    request: UpdateStandardsControlRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStandardsControlResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_standards_control_response: Optional[dict[str, Any]] = field(default=None)
    
