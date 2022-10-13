from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetAwsDefaultServiceQuotaXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_AWS_DEFAULT_SERVICE_QUOTA = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"


@dataclass
class GetAwsDefaultServiceQuotaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetAwsDefaultServiceQuotaXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetAwsDefaultServiceQuotaRequest:
    headers: GetAwsDefaultServiceQuotaHeaders = field(default=None)
    request: shared.GetAwsDefaultServiceQuotaRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAwsDefaultServiceQuotaResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_aws_default_service_quota_response: Optional[shared.GetAwsDefaultServiceQuotaResponse] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
