from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisassociateMemberFromGroupXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_DISASSOCIATE_MEMBER_FROM_GROUP = "WorkMailService.DisassociateMemberFromGroup"


@dataclass
class DisassociateMemberFromGroupHeaders:
    x_amz_target: DisassociateMemberFromGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateMemberFromGroupRequest:
    headers: DisassociateMemberFromGroupHeaders = field()
    request: shared.DisassociateMemberFromGroupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateMemberFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    directory_service_authentication_failed_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    disassociate_member_from_group_response: Optional[dict[str, Any]] = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    entity_state_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
