from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTagNameJSONPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSONTopicListTags:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    staff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staff') }})
    topic_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_count') }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSONTopicListTopicsPosters:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_group_id') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSONTopicListTopics:
    archetype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archetype') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    bookmarked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookmarked') }})
    bumped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bumped') }})
    bumped_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bumped_at') }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    fancy_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fancy_title') }})
    featured_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured_link') }})
    has_summary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_summary') }})
    highest_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highest_post_number') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    last_posted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_posted_at') }})
    last_poster_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_poster_username') }})
    last_read_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_post_number') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_level') }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned') }})
    pinned_globally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned_globally') }})
    posters: Optional[List[GetTagNameJSON200ApplicationJSONTopicListTopicsPosters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posters') }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts_count') }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_count') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    unpinned: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unpinned') }})
    unread_posts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread_posts') }})
    unseen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unseen') }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSONTopicList:
    can_create_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_create_topic') }})
    draft: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    draft_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft_key') }})
    draft_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft_sequence') }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    tags: Optional[List[GetTagNameJSON200ApplicationJSONTopicListTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    topics: Optional[List[GetTagNameJSON200ApplicationJSONTopicListTopics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSONUsers:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetTagNameJSON200ApplicationJSON:
    primary_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_groups') }})
    topic_list: Optional[GetTagNameJSON200ApplicationJSONTopicList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_list') }})
    users: Optional[List[GetTagNameJSON200ApplicationJSONUsers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass
class GetTagNameJSONRequest:
    path_params: GetTagNameJSONPathParams = field()
    

@dataclass
class GetTagNameJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_tag_name_json_200_application_json_object: Optional[GetTagNameJSON200ApplicationJSON] = field(default=None)
    
