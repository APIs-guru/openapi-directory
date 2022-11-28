from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DatabaseListCollectionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class DatabaseListCollectionsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseListCollectionsRequest:
    query_params: DatabaseListCollectionsQueryParams = field()
    security: DatabaseListCollectionsSecurity = field()
    

@dataclass
class DatabaseListCollectionsResponse:
    content_type: str = field()
    status_code: int = field()
    collection_list: Optional[shared.CollectionList] = field(default=None)
    
