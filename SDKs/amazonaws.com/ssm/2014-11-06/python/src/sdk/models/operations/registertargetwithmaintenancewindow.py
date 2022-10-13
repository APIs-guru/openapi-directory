from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterTargetWithMaintenanceWindowXAmzTargetEnum(str, Enum):
    AMAZON_SSM_REGISTER_TARGET_WITH_MAINTENANCE_WINDOW = "AmazonSSM.RegisterTargetWithMaintenanceWindow"


@dataclass
class RegisterTargetWithMaintenanceWindowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RegisterTargetWithMaintenanceWindowXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RegisterTargetWithMaintenanceWindowRequest:
    headers: RegisterTargetWithMaintenanceWindowHeaders = field(default=None)
    request: shared.RegisterTargetWithMaintenanceWindowRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterTargetWithMaintenanceWindowResponse:
    content_type: str = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    register_target_with_maintenance_window_result: Optional[shared.RegisterTargetWithMaintenanceWindowResult] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
