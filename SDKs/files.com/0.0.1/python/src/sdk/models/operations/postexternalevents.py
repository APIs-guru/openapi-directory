from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostExternalEventsRequestBodyStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    PARTIAL_FAILURE = "partial_failure"


@dataclass
class PostExternalEventsRequestBody:
    body: str = field(metadata={'multipart_form': { 'field_name': 'body' }})
    status: PostExternalEventsRequestBodyStatusEnum = field(metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclass
class PostExternalEventsRequest:
    request: PostExternalEventsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostExternalEventsResponse:
    content_type: str = field()
    status_code: int = field()
    external_event_entity: Optional[shared.ExternalEventEntity] = field(default=None)
    
