from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DatabaseUpdateDocumentPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseUpdateDocumentRequestBody:
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass
class DatabaseUpdateDocumentSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseUpdateDocumentRequest:
    path_params: DatabaseUpdateDocumentPathParams = field(default=None)
    request: Optional[DatabaseUpdateDocumentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DatabaseUpdateDocumentSecurity = field(default=None)
    

@dataclass
class DatabaseUpdateDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    document: Optional[dict[str, Any]] = field(default=None)
    
