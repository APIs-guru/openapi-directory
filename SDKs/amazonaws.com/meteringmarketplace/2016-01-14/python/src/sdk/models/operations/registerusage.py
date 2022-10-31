from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterUsageXAmzTargetEnum(str, Enum):
    AWSMP_METERING_SERVICE_REGISTER_USAGE = "AWSMPMeteringService.RegisterUsage"


@dataclass
class RegisterUsageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterUsageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterUsageRequest:
    headers: RegisterUsageHeaders = field(default=None)
    request: shared.RegisterUsageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterUsageResponse:
    content_type: str = field(default=None)
    customer_not_entitled_exception: Optional[Any] = field(default=None)
    disabled_api_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_product_code_exception: Optional[Any] = field(default=None)
    invalid_public_key_version_exception: Optional[Any] = field(default=None)
    invalid_region_exception: Optional[Any] = field(default=None)
    platform_not_supported_exception: Optional[Any] = field(default=None)
    register_usage_result: Optional[shared.RegisterUsageResult] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
