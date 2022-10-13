from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateOrganizationXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_CREATE_ORGANIZATION = "WorkMailService.CreateOrganization"


@dataclass
class CreateOrganizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateOrganizationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateOrganizationRequest:
    headers: CreateOrganizationHeaders = field(default=None)
    request: shared.CreateOrganizationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationResponse:
    content_type: str = field(default=None)
    create_organization_response: Optional[shared.CreateOrganizationResponse] = field(default=None)
    directory_in_use_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    name_availability_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
