from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DatabaseGetDocumentPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseGetDocumentSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseGetDocumentRequest:
    path_params: DatabaseGetDocumentPathParams = field(default=None)
    security: DatabaseGetDocumentSecurity = field(default=None)
    

@dataclass
class DatabaseGetDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    document: Optional[dict[str, Any]] = field(default=None)
    
