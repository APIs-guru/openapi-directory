from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetServerFollowersQueryParams:
    actor_type: Optional[shared.ActorTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'actorType', 'style': 'form', 'explode': True }})
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[shared.FollowStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetServerFollowers200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetServerFollowersRequest:
    query_params: GetServerFollowersQueryParams = field()
    

@dataclass
class GetServerFollowersResponse:
    content_type: str = field()
    status_code: int = field()
    get_server_followers_200_application_json_object: Optional[GetServerFollowers200ApplicationJSON] = field(default=None)
    
