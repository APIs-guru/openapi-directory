from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionsOnePathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsOneRequest:
    path_params: CollectionsOnePathParams = field(default=None)
    

@dataclass
class CollectionsOneResponse:
    content_type: str = field(default=None)
    get_collection_response: Optional[shared.GetCollectionResponse] = field(default=None)
    status_code: int = field(default=None)
    
