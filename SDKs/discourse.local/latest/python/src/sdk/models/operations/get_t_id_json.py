from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTIDJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTIDJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONActionsSummary:
    can_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_act') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONDetailsCreatedBy:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONDetailsLastPoster:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONDetailsParticipants:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_bg_color') }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_color') }})
    flair_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_name') }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flair_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    post_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_count') }})
    primary_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_group_name') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONDetails:
    can_convert_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_convert_topic') }})
    can_create_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_create_post') }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_delete') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_edit') }})
    can_flag_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_flag_topic') }})
    can_move_posts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_move_posts') }})
    can_remove_allowed_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_remove_allowed_users') }})
    can_remove_self_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_remove_self_id') }})
    can_reply_as_new_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_reply_as_new_topic') }})
    can_review_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_review_topic') }})
    created_by: Optional[GetTIDJSON200ApplicationJSONDetailsCreatedBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    last_poster: Optional[GetTIDJSON200ApplicationJSONDetailsLastPoster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_poster') }})
    notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_level') }})
    participants: Optional[List[GetTIDJSON200ApplicationJSONDetailsParticipants]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary:
    can_act: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_act') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts:
    clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    internal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal') }})
    reflection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reflection') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONPostStreamPosts:
    actions_summary: Optional[List[GetTIDJSON200ApplicationJSONPostStreamPostsActionsSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions_summary') }})
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
    link_counts: Optional[List[GetTIDJSON200ApplicationJSONPostStreamPostsLinkCounts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_counts') }})
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
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
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
class GetTIDJSON200ApplicationJSONPostStream:
    posts: Optional[List[GetTIDJSON200ApplicationJSONPostStreamPosts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    stream: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_template') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONSuggestedTopicsPosters:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    user: Optional[GetTIDJSON200ApplicationJSONSuggestedTopicsPostersUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSONSuggestedTopics:
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
    highest_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highest_post_number') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    last_posted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_posted_at') }})
    last_read_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_post_number') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_level') }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned') }})
    posters: Optional[List[GetTIDJSON200ApplicationJSONSuggestedTopicsPosters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posters') }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts_count') }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_count') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    unpinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unpinned') }})
    unread_posts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread_posts') }})
    unseen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unseen') }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclass
class GetTIDJSON200ApplicationJSON:
    actions_summary: Optional[List[GetTIDJSON200ApplicationJSONActionsSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions_summary') }})
    archetype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archetype') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    bookmarked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookmarked') }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    chunk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chunk_size') }})
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    current_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_post_number') }})
    deleted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_at') }})
    deleted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_by') }})
    details: Optional[GetTIDJSON200ApplicationJSONDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    draft: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    draft_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft_key') }})
    draft_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft_sequence') }})
    fancy_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fancy_title') }})
    featured_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured_link') }})
    has_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_deleted') }})
    has_summary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_summary') }})
    highest_post_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highest_post_number') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    last_posted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_posted_at') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    message_bus_last_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_bus_last_id') }})
    participant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_count') }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned') }})
    pinned_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned_at') }})
    pinned_globally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned_globally') }})
    pinned_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned_until') }})
    post_stream: Optional[GetTIDJSON200ApplicationJSONPostStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_stream') }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts_count') }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_count') }})
    show_read_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_read_indicator') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    suggested_topics: Optional[List[GetTIDJSON200ApplicationJSONSuggestedTopics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggested_topics') }})
    thumbnails: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    timeline_lookup: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline_lookup') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    topic_timer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_timer') }})
    unpinned: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unpinned') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    word_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('word_count') }})
    

@dataclass
class GetTIDJSONRequest:
    headers: GetTIDJSONHeaders = field()
    path_params: GetTIDJSONPathParams = field()
    

@dataclass
class GetTIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_t_id_json_200_application_json_object: Optional[GetTIDJSON200ApplicationJSON] = field(default=None)
    
