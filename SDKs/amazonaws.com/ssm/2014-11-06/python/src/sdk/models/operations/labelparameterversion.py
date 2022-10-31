from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class LabelParameterVersionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LABEL_PARAMETER_VERSION = "AmazonSSM.LabelParameterVersion"


@dataclass
class LabelParameterVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: LabelParameterVersionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class LabelParameterVersionRequest:
    headers: LabelParameterVersionHeaders = field(default=None)
    request: shared.LabelParameterVersionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LabelParameterVersionResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    label_parameter_version_result: Optional[shared.LabelParameterVersionResult] = field(default=None)
    parameter_not_found: Optional[Any] = field(default=None)
    parameter_version_label_limit_exceeded: Optional[Any] = field(default=None)
    parameter_version_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    
