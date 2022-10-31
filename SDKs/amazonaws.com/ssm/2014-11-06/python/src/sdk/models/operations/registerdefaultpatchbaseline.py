from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterDefaultPatchBaselineXAmzTargetEnum(str, Enum):
    AMAZON_SSM_REGISTER_DEFAULT_PATCH_BASELINE = "AmazonSSM.RegisterDefaultPatchBaseline"


@dataclass
class RegisterDefaultPatchBaselineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterDefaultPatchBaselineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterDefaultPatchBaselineRequest:
    headers: RegisterDefaultPatchBaselineHeaders = field(default=None)
    request: shared.RegisterDefaultPatchBaselineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterDefaultPatchBaselineResponse:
    content_type: str = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    register_default_patch_baseline_result: Optional[shared.RegisterDefaultPatchBaselineResult] = field(default=None)
    status_code: int = field(default=None)
    
