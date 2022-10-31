from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartMonitoringScheduleXAmzTargetEnum(str, Enum):
    SAGE_MAKER_START_MONITORING_SCHEDULE = "SageMaker.StartMonitoringSchedule"


@dataclass
class StartMonitoringScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartMonitoringScheduleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartMonitoringScheduleRequest:
    headers: StartMonitoringScheduleHeaders = field(default=None)
    request: shared.StartMonitoringScheduleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartMonitoringScheduleResponse:
    content_type: str = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
