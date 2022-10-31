from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ResolveCustomerXAmzTargetEnum(str, Enum):
    AWSMP_METERING_SERVICE_RESOLVE_CUSTOMER = "AWSMPMeteringService.ResolveCustomer"


@dataclass
class ResolveCustomerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ResolveCustomerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResolveCustomerRequest:
    headers: ResolveCustomerHeaders = field(default=None)
    request: shared.ResolveCustomerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResolveCustomerResponse:
    content_type: str = field(default=None)
    disabled_api_exception: Optional[Any] = field(default=None)
    expired_token_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_token_exception: Optional[Any] = field(default=None)
    resolve_customer_result: Optional[shared.ResolveCustomerResult] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
