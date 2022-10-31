from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RequestServiceQuotaIncreaseXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_REQUEST_SERVICE_QUOTA_INCREASE = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"


@dataclass
class RequestServiceQuotaIncreaseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RequestServiceQuotaIncreaseXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestServiceQuotaIncreaseRequest:
    headers: RequestServiceQuotaIncreaseHeaders = field(default=None)
    request: shared.RequestServiceQuotaIncreaseRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RequestServiceQuotaIncreaseResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_access_denied_exception: Optional[Any] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    invalid_resource_state_exception: Optional[Any] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    quota_exceeded_exception: Optional[Any] = field(default=None)
    request_service_quota_increase_response: Optional[shared.RequestServiceQuotaIncreaseResponse] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
