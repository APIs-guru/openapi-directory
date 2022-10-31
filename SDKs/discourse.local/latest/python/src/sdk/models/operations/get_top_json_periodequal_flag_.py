from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetTopJSONPeriodEqualFlagPathParams:
    flag: str = field(default=None, metadata={'path_param': { 'field_name': 'flag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTopJSONPeriodEqualFlagHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTopJSONPeriodEqualFlagRequest:
    path_params: GetTopJSONPeriodEqualFlagPathParams = field(default=None)
    headers: GetTopJSONPeriodEqualFlagHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopicsPosters:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_group_id' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopics:
    archetype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archetype' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    bookmarked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookmarked' }})
    bumped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bumped' }})
    bumped_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bumped_at' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    fancy_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fancy_title' }})
    featured_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured_link' }})
    has_summary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_summary' }})
    highest_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highest_post_number' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    last_posted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_posted_at' }})
    last_poster_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_poster_username' }})
    last_read_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_read_post_number' }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like_count' }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liked' }})
    notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_level' }})
    op_like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op_like_count' }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinned' }})
    pinned_globally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinned_globally' }})
    posters: Optional[List[GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopicsPosters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posters' }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts_count' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_count' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    unpinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unpinned' }})
    unread_posts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread_posts' }})
    unseen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unseen' }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    

@dataclass_json
@dataclass
class GetTopJSONPeriodEqualFlag200ApplicationJSONTopicList:
    can_create_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_create_topic' }})
    draft: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    draft_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft_key' }})
    draft_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft_sequence' }})
    for_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'for_period' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    topics: Optional[List[GetTopJSONPeriodEqualFlag200ApplicationJSONTopicListTopics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    

@dataclass_json
@dataclass
class GetTopJSONPeriodEqualFlag200ApplicationJSONUsers:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class GetTopJSONPeriodEqualFlag200ApplicationJSON:
    primary_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_groups' }})
    topic_list: Optional[GetTopJSONPeriodEqualFlag200ApplicationJSONTopicList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_list' }})
    users: Optional[List[GetTopJSONPeriodEqualFlag200ApplicationJSONUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class GetTopJSONPeriodEqualFlagResponse:
    content_type: str = field(default=None)
    get_top_json_period_equal_flag_200_application_json_object: Optional[GetTopJSONPeriodEqualFlag200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
