from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DataPointsPatchFavouritePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DataPointsPatchFavouriteRequest:
    path_params: DataPointsPatchFavouritePathParams = field()
    

@dataclass
class DataPointsPatchFavouriteResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
