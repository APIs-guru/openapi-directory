from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class GetDirectoryItemsJSONAscEnum(str, Enum):
    TRUE = "true"

class GetDirectoryItemsJSONOrderEnum(str, Enum):
    LIKES_RECEIVED = "likes_received"
    LIKES_GIVEN = "likes_given"
    TOPIC_COUNT = "topic_count"
    POST_COUNT = "post_count"
    TOPICS_ENTERED = "topics_entered"
    POSTS_READ = "posts_read"
    DAYS_VISITED = "days_visited"

class GetDirectoryItemsJSONPeriodEnum(str, Enum):
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    YEARLY = "yearly"
    ALL = "all"


@dataclass
class GetDirectoryItemsJSONQueryParams:
    asc: Optional[GetDirectoryItemsJSONAscEnum] = field(default=None, metadata={'query_param': { 'field_name': 'asc', 'style': 'form', 'explode': True }})
    order: GetDirectoryItemsJSONOrderEnum = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    period: GetDirectoryItemsJSONPeriodEnum = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectoryItemsJSONRequest:
    query_params: GetDirectoryItemsJSONQueryParams = field(default=None)
    

@dataclass
class GetDirectoryItemsJSONResponse:
    content_type: str = field(default=None)
    get_directory_items_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
