from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreatePatchBaselineXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CREATE_PATCH_BASELINE = "AmazonSSM.CreatePatchBaseline"


@dataclass
class CreatePatchBaselineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreatePatchBaselineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePatchBaselineRequest:
    headers: CreatePatchBaselineHeaders = field(default=None)
    request: shared.CreatePatchBaselineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePatchBaselineResponse:
    content_type: str = field(default=None)
    create_patch_baseline_result: Optional[shared.CreatePatchBaselineResult] = field(default=None)
    idempotent_parameter_mismatch: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
