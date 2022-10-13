from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposRemoveUserAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposRemoveUserAccessRestrictionsRequestBody:
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class ReposRemoveUserAccessRestrictionsRequest:
    path_params: ReposRemoveUserAccessRestrictionsPathParams = field(default=None)
    request: Optional[ReposRemoveUserAccessRestrictionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposRemoveUserAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
