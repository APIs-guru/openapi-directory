from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetContainerServiceMetricDataXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_CONTAINER_SERVICE_METRIC_DATA = "Lightsail_20161128.GetContainerServiceMetricData"


@dataclass
class GetContainerServiceMetricDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetContainerServiceMetricDataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetContainerServiceMetricDataRequest:
    headers: GetContainerServiceMetricDataHeaders = field(default=None)
    request: shared.GetContainerServiceMetricDataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetContainerServiceMetricDataResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_container_service_metric_data_result: Optional[shared.GetContainerServiceMetricDataResult] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
