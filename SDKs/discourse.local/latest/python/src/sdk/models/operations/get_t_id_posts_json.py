from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTIDPostsJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTIDPostsJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTIDPostsJSONRequestBody:
    post_ids_: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_ids[]') }})
    

@dataclass_json
@dataclass
class GetTIDPostsJSON200ApplicationJSONPostStreamPostsActionsSummary:
    can_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_act') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetTIDPostsJSON200ApplicationJSONPostStreamPosts:
    actions_summary: Optional[List[GetTIDPostsJSON200ApplicationJSONPostStreamPostsActionsSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions_summary') }})
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_delete') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_edit') }})
    can_recover: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_recover') }})
    can_view_edit_history: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_view_edit_history') }})
    can_wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_wiki') }})
    cooked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cooked') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    deleted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_at') }})
    display_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_username') }})
    edit_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_reason') }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_bg_color') }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_color') }})
    flair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_name') }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_url') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    incoming_link_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incoming_link_count') }})
    moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderator') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_number') }})
    post_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_type') }})
    primary_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_group_name') }})
    quote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_count') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    readers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readers_count') }})
    reads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reads') }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_count') }})
    reply_to_post_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_to_post_number') }})
    reviewable_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewable_id') }})
    reviewable_score_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewable_score_count') }})
    reviewable_score_pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewable_score_pending_count') }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    staff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staff') }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    topic_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_slug') }})
    trust_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust_level') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    user_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_deleted') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_title') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    wiki: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wiki') }})
    yours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yours') }})
    

@dataclass_json
@dataclass
class GetTIDPostsJSON200ApplicationJSONPostStream:
    posts: Optional[List[GetTIDPostsJSON200ApplicationJSONPostStreamPosts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    

@dataclass_json
@dataclass
class GetTIDPostsJSON200ApplicationJSON:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    post_stream: Optional[GetTIDPostsJSON200ApplicationJSONPostStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_stream') }})
    

@dataclass
class GetTIDPostsJSONRequest:
    headers: GetTIDPostsJSONHeaders = field()
    path_params: GetTIDPostsJSONPathParams = field()
    request: Optional[GetTIDPostsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTIDPostsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_t_id_posts_json_200_application_json_object: Optional[GetTIDPostsJSON200ApplicationJSON] = field(default=None)
    
