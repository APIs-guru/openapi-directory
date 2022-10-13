from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetServerFollowingQueryParams:
    actor_type: Optional[shared.ActorTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'actorType', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[shared.FollowStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServerFollowingRequest:
    query_params: GetServerFollowingQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetServerFollowing200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetServerFollowingResponse:
    content_type: str = field(default=None)
    get_server_following_200_application_json_object: Optional[GetServerFollowing200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
