from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DatabaseListDocumentsPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

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
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseListDocumentsRequest:
    path_params: DatabaseListDocumentsPathParams = field(default=None)
    query_params: DatabaseListDocumentsQueryParams = field(default=None)
    security: DatabaseListDocumentsSecurity = field(default=None)
    

@dataclass
class DatabaseListDocumentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    document_list: Optional[shared.DocumentList] = field(default=None)
    
