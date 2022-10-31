from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"


@dataclass
class GetServiceQuotaIncreaseRequestFromTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceQuotaIncreaseRequestFromTemplateRequest:
    headers: GetServiceQuotaIncreaseRequestFromTemplateHeaders = field(default=None)
    request: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetServiceQuotaIncreaseRequestFromTemplateResponse:
    aws_service_access_not_enabled_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_access_denied_exception: Optional[Any] = field(default=None)
    get_service_quota_increase_request_from_template_response: Optional[shared.GetServiceQuotaIncreaseRequestFromTemplateResponse] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
