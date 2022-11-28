from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionsAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionsAllRequest:
    path_params: CollectionsAllPathParams = field()
    query_params: CollectionsAllQueryParams = field()
    

@dataclass
class CollectionsAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_collections_response: Optional[shared.GetCollectionsResponse] = field(default=None)
    
