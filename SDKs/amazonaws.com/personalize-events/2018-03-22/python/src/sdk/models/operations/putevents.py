from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutEventsRequestBody:
    event_list: List[shared.Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventList' }})
    session_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    tracking_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class PutEventsRequest:
    headers: PutEventsHeaders = field(default=None)
    request: PutEventsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEventsResponse:
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
