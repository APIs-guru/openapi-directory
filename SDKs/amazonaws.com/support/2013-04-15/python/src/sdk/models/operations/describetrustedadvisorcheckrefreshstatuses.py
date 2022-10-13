from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"


@dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesRequest:
    headers: DescribeTrustedAdvisorCheckRefreshStatusesHeaders = field(default=None)
    request: shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesResponse:
    content_type: str = field(default=None)
    describe_trusted_advisor_check_refresh_statuses_response: Optional[shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
