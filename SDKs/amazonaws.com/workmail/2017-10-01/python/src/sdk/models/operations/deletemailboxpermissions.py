from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteMailboxPermissionsXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_DELETE_MAILBOX_PERMISSIONS = "WorkMailService.DeleteMailboxPermissions"


@dataclass
class DeleteMailboxPermissionsHeaders:
    x_amz_target: DeleteMailboxPermissionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMailboxPermissionsRequest:
    headers: DeleteMailboxPermissionsHeaders = field()
    request: shared.DeleteMailboxPermissionsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteMailboxPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    delete_mailbox_permissions_response: Optional[dict[str, Any]] = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    entity_state_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    organization_not_found_exception: Optional[Any] = field(default=None)
    organization_state_exception: Optional[Any] = field(default=None)
    
