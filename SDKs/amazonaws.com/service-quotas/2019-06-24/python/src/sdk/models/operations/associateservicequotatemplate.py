from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class AssociateServiceQuotaTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"


@dataclass
class AssociateServiceQuotaTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateServiceQuotaTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateServiceQuotaTemplateRequest:
    headers: AssociateServiceQuotaTemplateHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateServiceQuotaTemplateResponse:
    aws_service_access_not_enabled_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    associate_service_quota_template_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    dependency_access_denied_exception: Optional[Any] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    organization_not_in_all_features_mode_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
