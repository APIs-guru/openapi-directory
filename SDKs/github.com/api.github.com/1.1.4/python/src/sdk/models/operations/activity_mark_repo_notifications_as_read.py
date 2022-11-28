from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActivityMarkRepoNotificationsAsReadPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivityMarkRepoNotificationsAsReadRequestBody:
    last_read_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at') }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadRequest:
    path_params: ActivityMarkRepoNotificationsAsReadPathParams = field()
    request: Optional[ActivityMarkRepoNotificationsAsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadResponse:
    content_type: str = field()
    status_code: int = field()
    
