from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_DESCRIBE_TRUSTED_ADVISOR_CHECK_SUMMARIES = "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries"


@dataclass
class DescribeTrustedAdvisorCheckSummariesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeTrustedAdvisorCheckSummariesRequest:
    headers: DescribeTrustedAdvisorCheckSummariesHeaders = field(default=None)
    request: shared.DescribeTrustedAdvisorCheckSummariesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeTrustedAdvisorCheckSummariesResponse:
    content_type: str = field(default=None)
    describe_trusted_advisor_check_summaries_response: Optional[shared.DescribeTrustedAdvisorCheckSummariesResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
