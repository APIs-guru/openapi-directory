from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetServerFollowersQueryParams:
    actor_type: Optional[shared.ActorTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'actorType', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[shared.FollowStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServerFollowersRequest:
    query_params: GetServerFollowersQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetServerFollowers200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetServerFollowersResponse:
    content_type: str = field(default=None)
    get_server_followers_200_application_json_object: Optional[GetServerFollowers200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
