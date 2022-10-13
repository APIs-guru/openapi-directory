from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class ConversionsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"


@dataclass
class ConversionsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    status: Optional[ConversionsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversionsCountRequest:
    query_params: ConversionsCountQueryParams = field(default=None)
    

@dataclass
class ConversionsCountResponse:
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
