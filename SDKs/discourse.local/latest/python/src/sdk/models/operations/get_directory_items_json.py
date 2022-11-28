from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

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
    order: GetDirectoryItemsJSONOrderEnum = field(metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    period: GetDirectoryItemsJSONPeriodEnum = field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    asc: Optional[GetDirectoryItemsJSONAscEnum] = field(default=None, metadata={'query_param': { 'field_name': 'asc', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectoryItemsJSONRequest:
    query_params: GetDirectoryItemsJSONQueryParams = field()
    

@dataclass
class GetDirectoryItemsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_directory_items_json_200_application_json_any: Optional[Any] = field(default=None)
    
