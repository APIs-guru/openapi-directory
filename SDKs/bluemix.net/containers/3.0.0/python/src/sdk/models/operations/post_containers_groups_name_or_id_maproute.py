from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostContainersGroupsNameOrIDMaproutePathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsNameOrIDMaprouteHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsNameOrIDMaprouteRequest:
    path_params: PostContainersGroupsNameOrIDMaproutePathParams = field(default=None)
    headers: PostContainersGroupsNameOrIDMaprouteHeaders = field(default=None)
    request: shared.Route = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContainersGroupsNameOrIDMaprouteResponse:
    containers_groups_name_or_id_maproute_post_info: Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
