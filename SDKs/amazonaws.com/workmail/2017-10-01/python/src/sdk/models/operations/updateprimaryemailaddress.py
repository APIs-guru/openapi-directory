from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdatePrimaryEmailAddressXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_UPDATE_PRIMARY_EMAIL_ADDRESS = "WorkMailService.UpdatePrimaryEmailAddress"


@dataclass
class UpdatePrimaryEmailAddressHeaders:
    x_amz_target: UpdatePrimaryEmailAddressXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePrimaryEmailAddressRequest:
    headers: UpdatePrimaryEmailAddressHeaders = field()
    request: shared.UpdatePrimaryEmailAddressRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePrimaryEmailAddressResponse:
    content_type: str = field()
    status_code: int = field()
    directory_service_authentication_failed_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    email_address_in_use_exception: Optional[Any] = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    entity_state_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    mail_domain_not_found_exception: Optional[Any] = field(default=None)
    mail_domain_state_exception: Optional[Any] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    update_primary_email_address_response: Optional[dict[str, Any]] = field(default=None)
    
