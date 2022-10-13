from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class PostExternalEventsRequestBodyStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    PARTIAL_FAILURE = "partial_failure"


@dataclass
class PostExternalEventsRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    status: PostExternalEventsRequestBodyStatusEnum = field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclass
class PostExternalEventsRequest:
    request: PostExternalEventsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostExternalEventsResponse:
    content_type: str = field(default=None)
    external_event_entity: Optional[shared.ExternalEventEntity] = field(default=None)
    status_code: int = field(default=None)
    
