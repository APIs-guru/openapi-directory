from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DatabaseDeleteDocumentPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseDeleteDocumentSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseDeleteDocumentRequest:
    path_params: DatabaseDeleteDocumentPathParams = field()
    security: DatabaseDeleteDocumentSecurity = field()
    

@dataclass
class DatabaseDeleteDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    
