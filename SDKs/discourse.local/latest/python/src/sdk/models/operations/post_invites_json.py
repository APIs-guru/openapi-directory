from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostInvitesJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostInvitesJSONRequestBody:
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_message' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_names' }})
    max_redemptions_allowed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_redemptions_allowed' }})
    skip_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_email' }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_id' }})
    

@dataclass
class PostInvitesJSONRequest:
    headers: PostInvitesJSONHeaders = field(default=None)
    request: Optional[PostInvitesJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostInvitesJSON200ApplicationJSON:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_message' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    emailed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailed' }})
    expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    topics: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass
class PostInvitesJSONResponse:
    content_type: str = field(default=None)
    post_invites_json_200_application_json_object: Optional[PostInvitesJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
