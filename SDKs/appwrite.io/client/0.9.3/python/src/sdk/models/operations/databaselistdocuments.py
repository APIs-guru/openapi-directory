from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DatabaseListDocumentsPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseListDocumentsQueryParams:
    filters: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_cast: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderCast', 'style': 'form', 'explode': True }})
    order_field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderField', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class DatabaseListDocumentsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseListDocumentsRequest:
    path_params: DatabaseListDocumentsPathParams = field()
    query_params: DatabaseListDocumentsQueryParams = field()
    security: DatabaseListDocumentsSecurity = field()
    

@dataclass
class DatabaseListDocumentsResponse:
    content_type: str = field()
    status_code: int = field()
    document_list: Optional[shared.DocumentList] = field(default=None)
    
