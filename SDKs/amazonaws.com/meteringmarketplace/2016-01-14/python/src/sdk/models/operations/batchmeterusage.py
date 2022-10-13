from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchMeterUsageXAmzTargetEnum(str, Enum):
    AWSMP_METERING_SERVICE_BATCH_METER_USAGE = "AWSMPMeteringService.BatchMeterUsage"


@dataclass
class BatchMeterUsageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: BatchMeterUsageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class BatchMeterUsageRequest:
    headers: BatchMeterUsageHeaders = field(default=None)
    request: shared.BatchMeterUsageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchMeterUsageResponse:
    batch_meter_usage_result: Optional[shared.BatchMeterUsageResult] = field(default=None)
    content_type: str = field(default=None)
    disabled_api_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_customer_identifier_exception: Optional[Any] = field(default=None)
    invalid_product_code_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    invalid_usage_allocations_exception: Optional[Any] = field(default=None)
    invalid_usage_dimension_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    timestamp_out_of_bounds_exception: Optional[Any] = field(default=None)
    
