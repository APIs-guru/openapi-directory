from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPostsJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostsJSONRequest:
    headers: GetPostsJSONHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetPostsJSON200ApplicationJSONLatestPostsActionsSummary:
    can_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_act' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetPostsJSON200ApplicationJSONLatestPosts:
    actions_summary: Optional[List[GetPostsJSON200ApplicationJSONLatestPostsActionsSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions_summary' }})
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    can_recover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_recover' }})
    can_view_edit_history: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_view_edit_history' }})
    can_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_wiki' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    cooked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cooked' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deleted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_at' }})
    display_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_username' }})
    edit_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_reason' }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_bg_color' }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_color' }})
    flair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_name' }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_url' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    incoming_link_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_link_count' }})
    moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderator' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_number' }})
    post_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_type' }})
    primary_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_group_name' }})
    quote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote_count' }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    readers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readers_count' }})
    reads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reads' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_count' }})
    reply_to_post_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_to_post_number' }})
    reviewable_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_id' }})
    reviewable_score_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_score_count' }})
    reviewable_score_pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_score_pending_count' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    staff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staff' }})
    topic_html_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_html_title' }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_id' }})
    topic_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_slug' }})
    topic_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_title' }})
    trust_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust_level' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    user_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_deleted' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    user_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_title' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wiki' }})
    yours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yours' }})
    

@dataclass_json
@dataclass
class GetPostsJSON200ApplicationJSON:
    latest_posts: Optional[List[GetPostsJSON200ApplicationJSONLatestPosts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_posts' }})
    

@dataclass
class GetPostsJSONResponse:
    content_type: str = field(default=None)
    get_posts_json_200_application_json_object: Optional[GetPostsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
