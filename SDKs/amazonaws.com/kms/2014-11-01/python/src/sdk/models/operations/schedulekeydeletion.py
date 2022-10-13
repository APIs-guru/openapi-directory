from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ScheduleKeyDeletionXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_SCHEDULE_KEY_DELETION = "TrentService.ScheduleKeyDeletion"


@dataclass
class ScheduleKeyDeletionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ScheduleKeyDeletionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ScheduleKeyDeletionRequest:
    headers: ScheduleKeyDeletionHeaders = field(default=None)
    request: shared.ScheduleKeyDeletionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScheduleKeyDeletionResponse:
    content_type: str = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    schedule_key_deletion_response: Optional[shared.ScheduleKeyDeletionResponse] = field(default=None)
    status_code: int = field(default=None)
    
