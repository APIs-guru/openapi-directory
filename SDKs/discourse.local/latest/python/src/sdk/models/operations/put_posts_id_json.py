from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutPostsIDJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPostsIDJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass_json
@dataclass
class PutPostsIDJSONRequestBodyPost:
    edit_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_reason' }})
    raw: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    

@dataclass_json
@dataclass
class PutPostsIDJSONRequestBody:
    post: Optional[PutPostsIDJSONRequestBodyPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    

@dataclass
class PutPostsIDJSONRequest:
    path_params: PutPostsIDJSONPathParams = field(default=None)
    headers: PutPostsIDJSONHeaders = field(default=None)
    request: Optional[PutPostsIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutPostsIDJSON200ApplicationJSONPostActionsSummary:
    can_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_act' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class PutPostsIDJSON200ApplicationJSONPost:
    actions_summary: Optional[List[PutPostsIDJSON200ApplicationJSONPostActionsSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions_summary' }})
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    can_recover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_recover' }})
    can_view_edit_history: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_view_edit_history' }})
    can_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_wiki' }})
    cooked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cooked' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    deleted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_at' }})
    display_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_username' }})
    draft_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft_sequence' }})
    edit_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_reason' }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_bg_color' }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_color' }})
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
    readers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readers_count' }})
    reads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reads' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_count' }})
    reply_to_post_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_to_post_number' }})
    reviewable_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_id' }})
    reviewable_score_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_score_count' }})
    reviewable_score_pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewable_score_pending_count' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    staff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staff' }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_id' }})
    topic_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_slug' }})
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
class PutPostsIDJSON200ApplicationJSON:
    post: Optional[PutPostsIDJSON200ApplicationJSONPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    

@dataclass
class PutPostsIDJSONResponse:
    content_type: str = field(default=None)
    put_posts_id_json_200_application_json_object: Optional[PutPostsIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
