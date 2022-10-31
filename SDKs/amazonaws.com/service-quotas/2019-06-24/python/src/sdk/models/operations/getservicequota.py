from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetServiceQuotaXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA = "ServiceQuotasV20190624.GetServiceQuota"


@dataclass
class GetServiceQuotaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetServiceQuotaXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceQuotaRequest:
    headers: GetServiceQuotaHeaders = field(default=None)
    request: shared.GetServiceQuotaRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetServiceQuotaResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_service_quota_response: Optional[shared.GetServiceQuotaResponse] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
