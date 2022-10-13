from dataclasses import dataclass, field
from typing import Enum,Optional

class PostV1OrderFeedbackActionEnum(str, Enum):
    APPROVE = "APPROVE"
    REJECT = "REJECT"
    REJECT_BLACKLIST = "REJECT_BLACKLIST"

class PostV1OrderFeedbackFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class PostV1OrderFeedbackQueryParams:
    action: PostV1OrderFeedbackActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    format: Optional[PostV1OrderFeedbackFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class PostV1OrderFeedbackRequest:
    query_params: PostV1OrderFeedbackQueryParams = field(default=None)
    

@dataclass
class PostV1OrderFeedbackResponse:
    content_type: str = field(default=None)
    post_v1_order_feedback_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
