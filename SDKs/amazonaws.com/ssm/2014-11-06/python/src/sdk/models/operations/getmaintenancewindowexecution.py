from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetMaintenanceWindowExecutionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_MAINTENANCE_WINDOW_EXECUTION = "AmazonSSM.GetMaintenanceWindowExecution"


@dataclass
class GetMaintenanceWindowExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetMaintenanceWindowExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMaintenanceWindowExecutionRequest:
    headers: GetMaintenanceWindowExecutionHeaders = field(default=None)
    request: shared.GetMaintenanceWindowExecutionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMaintenanceWindowExecutionResponse:
    content_type: str = field(default=None)
    does_not_exist_exception: Optional[Any] = field(default=None)
    get_maintenance_window_execution_result: Optional[shared.GetMaintenanceWindowExecutionResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
