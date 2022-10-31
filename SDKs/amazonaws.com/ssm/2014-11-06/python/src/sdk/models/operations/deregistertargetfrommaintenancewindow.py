from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeregisterTargetFromMaintenanceWindowXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"


@dataclass
class DeregisterTargetFromMaintenanceWindowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeregisterTargetFromMaintenanceWindowXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeregisterTargetFromMaintenanceWindowRequest:
    headers: DeregisterTargetFromMaintenanceWindowHeaders = field(default=None)
    request: shared.DeregisterTargetFromMaintenanceWindowRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeregisterTargetFromMaintenanceWindowResponse:
    content_type: str = field(default=None)
    deregister_target_from_maintenance_window_result: Optional[shared.DeregisterTargetFromMaintenanceWindowResult] = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    target_in_use_exception: Optional[Any] = field(default=None)
    
