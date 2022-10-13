from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ActivityMarkRepoNotificationsAsReadPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivityMarkRepoNotificationsAsReadRequestBody:
    last_read_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_read_at' }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadRequest:
    path_params: ActivityMarkRepoNotificationsAsReadPathParams = field(default=None)
    request: Optional[ActivityMarkRepoNotificationsAsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
