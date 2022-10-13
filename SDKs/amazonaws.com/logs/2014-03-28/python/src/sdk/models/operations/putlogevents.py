from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutLogEventsXAmzTargetEnum(str, Enum):
    LOGS_20140328_PUT_LOG_EVENTS = "Logs_20140328.PutLogEvents"


@dataclass
class PutLogEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutLogEventsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutLogEventsRequest:
    headers: PutLogEventsHeaders = field(default=None)
    request: shared.PutLogEventsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutLogEventsResponse:
    content_type: str = field(default=None)
    data_already_accepted_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_sequence_token_exception: Optional[Any] = field(default=None)
    put_log_events_response: Optional[shared.PutLogEventsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unrecognized_client_exception: Optional[Any] = field(default=None)
    
