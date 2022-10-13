from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetMaintenanceWindowXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_MAINTENANCE_WINDOW = "AmazonSSM.GetMaintenanceWindow"


@dataclass
class GetMaintenanceWindowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetMaintenanceWindowXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetMaintenanceWindowRequest:
    headers: GetMaintenanceWindowHeaders = field(default=None)
    request: shared.GetMaintenanceWindowRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMaintenanceWindowResponse:
    content_type: str = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    get_maintenance_window_result: Optional[shared.GetMaintenanceWindowResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
