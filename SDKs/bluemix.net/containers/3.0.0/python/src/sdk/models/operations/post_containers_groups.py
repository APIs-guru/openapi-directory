from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostContainersGroupsHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsRequest:
    headers: PostContainersGroupsHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContainersGroupsResponse:
    containers_groups_post_created_info: Optional[shared.ContainersGroupsPostCreatedInfo] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
