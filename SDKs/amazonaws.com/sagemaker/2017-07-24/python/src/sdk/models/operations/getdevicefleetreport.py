from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetDeviceFleetReportXAmzTargetEnum(str, Enum):
    SAGE_MAKER_GET_DEVICE_FLEET_REPORT = "SageMaker.GetDeviceFleetReport"


@dataclass
class GetDeviceFleetReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDeviceFleetReportXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDeviceFleetReportRequest:
    headers: GetDeviceFleetReportHeaders = field(default=None)
    request: shared.GetDeviceFleetReportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeviceFleetReportResponse:
    content_type: str = field(default=None)
    get_device_fleet_report_response: Optional[shared.GetDeviceFleetReportResponse] = field(default=None)
    status_code: int = field(default=None)
    
