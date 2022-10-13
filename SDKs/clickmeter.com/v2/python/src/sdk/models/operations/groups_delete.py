from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsDeleteRequest:
    path_params: GroupsDeletePathParams = field(default=None)
    

@dataclass
class GroupsDeleteResponse:
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
