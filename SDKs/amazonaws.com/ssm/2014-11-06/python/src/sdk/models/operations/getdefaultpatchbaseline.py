from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDefaultPatchBaselineXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_DEFAULT_PATCH_BASELINE = "AmazonSSM.GetDefaultPatchBaseline"


@dataclass
class GetDefaultPatchBaselineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDefaultPatchBaselineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDefaultPatchBaselineRequest:
    headers: GetDefaultPatchBaselineHeaders = field(default=None)
    request: shared.GetDefaultPatchBaselineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDefaultPatchBaselineResponse:
    content_type: str = field(default=None)
    get_default_patch_baseline_result: Optional[shared.GetDefaultPatchBaselineResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
