from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeEffectivePatchesForPatchBaselineQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline"


@dataclass
class DescribeEffectivePatchesForPatchBaselineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeEffectivePatchesForPatchBaselineRequest:
    query_params: DescribeEffectivePatchesForPatchBaselineQueryParams = field(default=None)
    headers: DescribeEffectivePatchesForPatchBaselineHeaders = field(default=None)
    request: shared.DescribeEffectivePatchesForPatchBaselineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeEffectivePatchesForPatchBaselineResponse:
    content_type: str = field(default=None)
    describe_effective_patches_for_patch_baseline_result: Optional[shared.DescribeEffectivePatchesForPatchBaselineResult] = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operating_system: Optional[Any] = field(default=None)
    
