from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsPatchFavouritePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsPatchFavouriteRequest:
    path_params: GroupsPatchFavouritePathParams = field()
    

@dataclass
class GroupsPatchFavouriteResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
