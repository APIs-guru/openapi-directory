from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposAddUserAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposAddUserAccessRestrictionsRequestBody:
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class ReposAddUserAccessRestrictionsRequest:
    path_params: ReposAddUserAccessRestrictionsPathParams = field(default=None)
    request: Optional[ReposAddUserAccessRestrictionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposAddUserAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
