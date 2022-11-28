from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionsOnePathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsOneRequest:
    path_params: CollectionsOnePathParams = field()
    

@dataclass
class CollectionsOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_collection_response: Optional[shared.GetCollectionResponse] = field(default=None)
    
