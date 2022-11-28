from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RegisterTaskWithMaintenanceWindowXAmzTargetEnum(str, Enum):
    AMAZON_SSM_REGISTER_TASK_WITH_MAINTENANCE_WINDOW = "AmazonSSM.RegisterTaskWithMaintenanceWindow"


@dataclass
class RegisterTaskWithMaintenanceWindowHeaders:
    x_amz_target: RegisterTaskWithMaintenanceWindowXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterTaskWithMaintenanceWindowRequest:
    headers: RegisterTaskWithMaintenanceWindowHeaders = field()
    request: shared.RegisterTaskWithMaintenanceWindowRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterTaskWithMaintenanceWindowResponse:
    content_type: str = field()
    status_code: int = field()
    does_not_exist_exception: Optional[Any] = field(default=None)
    feature_not_available_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    register_task_with_maintenance_window_result: Optional[shared.RegisterTaskWithMaintenanceWindowResult] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    
