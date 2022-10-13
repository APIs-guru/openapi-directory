from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetUByExternalProviderExternalIDJSONPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUByExternalProviderExternalIDJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass
class GetUByExternalProviderExternalIDJSONRequest:
    path_params: GetUByExternalProviderExternalIDJSONPathParams = field(default=None)
    headers: GetUByExternalProviderExternalIDJSONHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSONUserGroupUsers:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_level' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSONUserGroups:
    allow_membership_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_membership_requests' }})
    automatic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic' }})
    bio_cooked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_cooked' }})
    bio_excerpt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_excerpt' }})
    bio_raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_raw' }})
    can_admin_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_admin_group' }})
    can_see_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_see_members' }})
    default_notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_notification_level' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_bg_color' }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_color' }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_url' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    grant_trust_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_trust_level' }})
    has_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_messages' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    incoming_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_email' }})
    members_visibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_visibility_level' }})
    membership_request_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership_request_template' }})
    mentionable_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionable_level' }})
    messageable_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageable_level' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_group: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_group' }})
    public_admission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_admission' }})
    public_exit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_exit' }})
    publish_read_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publish_read_state' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_count' }})
    visibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility_level' }})
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSONUserUserAuthTokens:
    browser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browser' }})
    client_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_ip' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    seen_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seen_at' }})
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSONUserUserOption:
    allow_private_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_private_messages' }})
    auto_track_topics_after_msecs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_track_topics_after_msecs' }})
    automatically_unpin_topics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatically_unpin_topics' }})
    color_scheme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color_scheme_id' }})
    dark_scheme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dark_scheme_id' }})
    digest_after_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest_after_minutes' }})
    dynamic_favicon: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamic_favicon' }})
    email_digests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_digests' }})
    email_in_reply_to: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_in_reply_to' }})
    email_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_level' }})
    email_messages_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_messages_level' }})
    email_previous_replies: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_previous_replies' }})
    enable_allowed_pm_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_allowed_pm_users' }})
    enable_defer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_defer' }})
    enable_quoting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_quoting' }})
    external_links_in_new_tab: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_links_in_new_tab' }})
    hide_profile_and_presence: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_profile_and_presence' }})
    homepage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage_id' }})
    include_tl0_in_digests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_tl0_in_digests' }})
    like_notification_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like_notification_frequency' }})
    mailing_list_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_list_mode' }})
    mailing_list_mode_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_list_mode_frequency' }})
    new_topic_duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_topic_duration_minutes' }})
    notification_level_when_replying: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_level_when_replying' }})
    skip_new_user_tips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_new_user_tips' }})
    text_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_size' }})
    text_size_seq: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_size_seq' }})
    theme_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme_ids' }})
    theme_key_seq: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme_key_seq' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    title_count_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_count_mode' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSONUser:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    allowed_pm_usernames: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_pm_usernames' }})
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    badge_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badge_count' }})
    can_be_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_be_deleted' }})
    can_change_bio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_change_bio' }})
    can_change_location: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_change_location' }})
    can_change_website: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_change_website' }})
    can_delete_all_posts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete_all_posts' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    can_edit_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit_email' }})
    can_edit_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit_name' }})
    can_edit_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit_username' }})
    can_ignore_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_ignore_user' }})
    can_mute_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_mute_user' }})
    can_send_private_message_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_send_private_message_to_user' }})
    can_send_private_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_send_private_messages' }})
    can_upload_profile_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_upload_profile_header' }})
    can_upload_user_card_background: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_upload_user_card_background' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    featured_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured_topic' }})
    featured_user_badge_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured_user_badge_ids' }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_bg_color' }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_color' }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_url' }})
    group_users: Optional[List[GetUByExternalProviderExternalIDJSON200ApplicationJSONUserGroupUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_users' }})
    groups: Optional[List[GetUByExternalProviderExternalIDJSON200ApplicationJSONUserGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    has_title_badges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_title_badges' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored' }})
    ignored_usernames: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored_usernames' }})
    invited_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invited_by' }})
    last_posted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_posted_at' }})
    last_seen_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    mailing_list_posts_per_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailing_list_posts_per_day' }})
    moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderator' }})
    muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muted' }})
    muted_category_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muted_category_ids' }})
    muted_tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muted_tags' }})
    muted_usernames: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muted_usernames' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_count' }})
    post_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_count' }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_group_id' }})
    primary_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_group_name' }})
    profile_view_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_view_count' }})
    recent_time_read: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recent_time_read' }})
    regular_category_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regular_category_ids' }})
    second_factor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'second_factor_enabled' }})
    staged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staged' }})
    system_avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_avatar_template' }})
    system_avatar_upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_avatar_upload_id' }})
    time_read: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_read' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tracked_category_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracked_category_ids' }})
    tracked_tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracked_tags' }})
    trust_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust_level' }})
    uploaded_avatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploaded_avatar_id' }})
    user_api_keys: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_api_keys' }})
    user_auth_tokens: Optional[List[GetUByExternalProviderExternalIDJSON200ApplicationJSONUserUserAuthTokens]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_auth_tokens' }})
    user_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_fields' }})
    user_option: Optional[GetUByExternalProviderExternalIDJSON200ApplicationJSONUserUserOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_option' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    watched_category_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_category_ids' }})
    watched_first_post_category_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_first_post_category_ids' }})
    watched_tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watched_tags' }})
    watching_first_post_tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watching_first_post_tags' }})
    

@dataclass_json
@dataclass
class GetUByExternalProviderExternalIDJSON200ApplicationJSON:
    user: Optional[GetUByExternalProviderExternalIDJSON200ApplicationJSONUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_badges: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_badges' }})
    

@dataclass
class GetUByExternalProviderExternalIDJSONResponse:
    content_type: str = field(default=None)
    get_u_by_external_provider_external_id_json_200_application_json_object: Optional[GetUByExternalProviderExternalIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
