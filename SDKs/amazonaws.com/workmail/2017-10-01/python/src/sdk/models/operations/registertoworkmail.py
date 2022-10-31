from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterToWorkMailXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_REGISTER_TO_WORK_MAIL = "WorkMailService.RegisterToWorkMail"


@dataclass
class RegisterToWorkMailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterToWorkMailXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterToWorkMailRequest:
    headers: RegisterToWorkMailHeaders = field(default=None)
    request: shared.RegisterToWorkMailRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterToWorkMailResponse:
    content_type: str = field(default=None)
    directory_service_authentication_failed_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    email_address_in_use_exception: Optional[Any] = field(default=None)
    entity_already_registered_exception: Optional[Any] = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    entity_state_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    mail_domain_not_found_exception: Optional[Any] = field(default=None)
    mail_domain_state_exception: Optional[Any] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    register_to_work_mail_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
