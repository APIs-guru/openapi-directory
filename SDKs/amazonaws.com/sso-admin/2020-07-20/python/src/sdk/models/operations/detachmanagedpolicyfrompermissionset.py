from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DetachManagedPolicyFromPermissionSetXAmzTargetEnum(str, Enum):
    SWB_EXTERNAL_SERVICE_DETACH_MANAGED_POLICY_FROM_PERMISSION_SET = "SWBExternalService.DetachManagedPolicyFromPermissionSet"


@dataclass
class DetachManagedPolicyFromPermissionSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DetachManagedPolicyFromPermissionSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DetachManagedPolicyFromPermissionSetRequest:
    headers: DetachManagedPolicyFromPermissionSetHeaders = field(default=None)
    request: shared.DetachManagedPolicyFromPermissionSetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetachManagedPolicyFromPermissionSetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    detach_managed_policy_from_permission_set_response: Optional[dict[str, Any]] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
