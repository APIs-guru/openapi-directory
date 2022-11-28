from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostContainersGroupsNameOrIDUnmaproutePathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsNameOrIDUnmaprouteHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersGroupsNameOrIDUnmaprouteRequest:
    headers: PostContainersGroupsNameOrIDUnmaprouteHeaders = field()
    path_params: PostContainersGroupsNameOrIDUnmaproutePathParams = field()
    request: shared.Route = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContainersGroupsNameOrIDUnmaprouteResponse:
    content_type: str = field()
    status_code: int = field()
    containers_groups_name_or_id_maproute_post_info: Optional[shared.ContainersGroupsNameOrIDMaproutePostInfo] = field(default=None)
    
