from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetContainerPolicyXAmzTargetEnum(str, Enum):
    MEDIA_STORE_20170901_GET_CONTAINER_POLICY = "MediaStore_20170901.GetContainerPolicy"


@dataclass
class GetContainerPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetContainerPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetContainerPolicyRequest:
    headers: GetContainerPolicyHeaders = field(default=None)
    request: shared.GetContainerPolicyInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetContainerPolicyResponse:
    container_in_use_exception: Optional[Any] = field(default=None)
    container_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_container_policy_output: Optional[shared.GetContainerPolicyOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    policy_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
