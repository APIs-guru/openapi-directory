from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionsAllPathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionsAllRequest:
    path_params: CollectionsAllPathParams = field(default=None)
    query_params: CollectionsAllQueryParams = field(default=None)
    

@dataclass
class CollectionsAllResponse:
    content_type: str = field(default=None)
    get_collections_response: Optional[shared.GetCollectionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
