from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateOrganizationXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_CREATE_ORGANIZATION = "AWSOrganizationsV20161128.CreateOrganization"


@dataclass
class CreateOrganizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateOrganizationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOrganizationRequest:
    headers: CreateOrganizationHeaders = field(default=None)
    request: shared.CreateOrganizationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    access_denied_for_dependency_exception: Optional[Any] = field(default=None)
    already_in_organization_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    constraint_violation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_organization_response: Optional[shared.CreateOrganizationResponse] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
