from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostContainersGroupsHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsRequest:
    headers: PostContainersGroupsHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContainersGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    containers_groups_post_created_info: Optional[shared.ContainersGroupsPostCreatedInfo] = field(default=None)
    
