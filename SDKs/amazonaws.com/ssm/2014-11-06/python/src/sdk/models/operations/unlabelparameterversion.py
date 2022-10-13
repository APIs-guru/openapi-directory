from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UnlabelParameterVersionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UNLABEL_PARAMETER_VERSION = "AmazonSSM.UnlabelParameterVersion"


@dataclass
class UnlabelParameterVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UnlabelParameterVersionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UnlabelParameterVersionRequest:
    headers: UnlabelParameterVersionHeaders = field(default=None)
    request: shared.UnlabelParameterVersionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnlabelParameterVersionResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    parameter_not_found: Optional[Any] = field(default=None)
    parameter_version_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    unlabel_parameter_version_result: Optional[shared.UnlabelParameterVersionResult] = field(default=None)
    
