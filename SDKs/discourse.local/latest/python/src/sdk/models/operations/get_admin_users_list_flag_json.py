from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class GetAdminUsersListFlagJSONFlagEnum(str, Enum):
    ACTIVE = "active"
    NEW = "new"
    STAFF = "staff"
    SUSPENDED = "suspended"
    BLOCKED = "blocked"
    SUSPECT = "suspect"


@dataclass
class GetAdminUsersListFlagJSONPathParams:
    flag: GetAdminUsersListFlagJSONFlagEnum = field(default=None, metadata={'path_param': { 'field_name': 'flag', 'style': 'simple', 'explode': False }})
    
class GetAdminUsersListFlagJSONAscEnum(str, Enum):
    TRUE = "true"

class GetAdminUsersListFlagJSONOrderEnum(str, Enum):
    CREATED = "created"
    LAST_EMAILED = "last_emailed"
    SEEN = "seen"
    USERNAME = "username"
    EMAIL = "email"
    TRUST_LEVEL = "trust_level"
    DAYS_VISITED = "days_visited"
    POSTS_READ = "posts_read"
    TOPICS_VIEWED = "topics_viewed"
    POSTS = "posts"
    READ_TIME = "read_time"


@dataclass
class GetAdminUsersListFlagJSONQueryParams:
    asc: Optional[GetAdminUsersListFlagJSONAscEnum] = field(default=None, metadata={'query_param': { 'field_name': 'asc', 'style': 'form', 'explode': True }})
    order: Optional[GetAdminUsersListFlagJSONOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    show_emails: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'show_emails', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdminUsersListFlagJSONRequest:
    path_params: GetAdminUsersListFlagJSONPathParams = field(default=None)
    query_params: GetAdminUsersListFlagJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAdminUsersListFlagJSON200ApplicationJSON:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    avatar_template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    created_at_age: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at_age' }})
    days_visited: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_visited' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    flag_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_level' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_emailed_age: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_emailed_age' }})
    last_emailed_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_emailed_at' }})
    last_seen_age: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_age' }})
    last_seen_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at' }})
    manual_locked_trust_level: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manual_locked_trust_level' }})
    moderator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moderator' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    post_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_count' }})
    posts_read_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts_read_count' }})
    secondary_emails: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary_emails' }})
    staged: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staged' }})
    time_read: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_read' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    topics_entered: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics_entered' }})
    trust_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust_level' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class GetAdminUsersListFlagJSONResponse:
    content_type: str = field(default=None)
    get_admin_users_list_flag_json_200_application_json_objects: Optional[List[GetAdminUsersListFlagJSON200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    
