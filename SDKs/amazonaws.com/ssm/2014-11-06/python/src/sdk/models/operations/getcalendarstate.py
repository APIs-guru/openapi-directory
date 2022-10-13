from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetCalendarStateXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_CALENDAR_STATE = "AmazonSSM.GetCalendarState"


@dataclass
class GetCalendarStateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetCalendarStateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetCalendarStateRequest:
    headers: GetCalendarStateHeaders = field(default=None)
    request: shared.GetCalendarStateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetCalendarStateResponse:
    content_type: str = field(default=None)
    get_calendar_state_response: Optional[shared.GetCalendarStateResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_type: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_calendar_exception: Optional[Any] = field(default=None)
    
