from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class DisassociateServiceQuotaTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_DISASSOCIATE_SERVICE_QUOTA_TEMPLATE = "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"


@dataclass
class DisassociateServiceQuotaTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DisassociateServiceQuotaTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DisassociateServiceQuotaTemplateRequest:
    headers: DisassociateServiceQuotaTemplateHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateServiceQuotaTemplateResponse:
    aws_service_access_not_enabled_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_access_denied_exception: Optional[Any] = field(default=None)
    disassociate_service_quota_template_response: Optional[dict[str, Any]] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_quota_template_not_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
