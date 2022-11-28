from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DatabaseGetDocumentPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseGetDocumentSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseGetDocumentRequest:
    path_params: DatabaseGetDocumentPathParams = field()
    security: DatabaseGetDocumentSecurity = field()
    

@dataclass
class DatabaseGetDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    document: Optional[dict[str, Any]] = field(default=None)
    
