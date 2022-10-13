from dataclasses import dataclass, field



@dataclass
class DatabaseDeleteDocumentPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseDeleteDocumentSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseDeleteDocumentRequest:
    path_params: DatabaseDeleteDocumentPathParams = field(default=None)
    security: DatabaseDeleteDocumentSecurity = field(default=None)
    

@dataclass
class DatabaseDeleteDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
