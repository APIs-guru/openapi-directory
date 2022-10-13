from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthorizationWithUserApp:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AuthorizationWithUserUser:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AuthorizationWithUser:
    app: Optional[AuthorizationWithUserApp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    hashed_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashed_token' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note_url' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_last_eight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_last_eight' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[AuthorizationWithUserUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
