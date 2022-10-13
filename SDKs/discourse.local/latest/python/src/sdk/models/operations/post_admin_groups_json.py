from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminGroupsJSONRequestBodyGroup:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostAdminGroupsJSONRequestBody:
    group: PostAdminGroupsJSONRequestBodyGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    

@dataclass
class PostAdminGroupsJSONRequest:
    request: Optional[PostAdminGroupsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAdminGroupsJSON200ApplicationJSONBasicGroup:
    allow_membership_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_membership_requests' }})
    automatic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic' }})
    automatic_membership_email_domains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic_membership_email_domains' }})
    automatic_membership_retroactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic_membership_retroactive' }})
    bio_cooked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_cooked' }})
    bio_excerpt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_excerpt' }})
    bio_raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio_raw' }})
    can_see_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_see_members' }})
    default_notification_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_notification_level' }})
    flair_bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_bg_color' }})
    flair_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_color' }})
    flair_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flair_url' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_name' }})
    grant_trust_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_trust_level' }})
    has_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_messages' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    incoming_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_email' }})
    membership_request_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership_request_template' }})
    membership_visibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership_visibility_level' }})
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
class PostAdminGroupsJSON200ApplicationJSON:
    basic_group: PostAdminGroupsJSON200ApplicationJSONBasicGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basic_group' }})
    

@dataclass
class PostAdminGroupsJSONResponse:
    content_type: str = field(default=None)
    post_admin_groups_json_200_application_json_object: Optional[PostAdminGroupsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
