from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DatabaseCreateDocumentPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseCreateDocumentRequestBody:
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    parent_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentDocument' }})
    parent_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentProperty' }})
    parent_property_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPropertyType' }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass
class DatabaseCreateDocumentSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseCreateDocumentRequest:
    path_params: DatabaseCreateDocumentPathParams = field(default=None)
    request: Optional[DatabaseCreateDocumentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DatabaseCreateDocumentSecurity = field(default=None)
    

@dataclass
class DatabaseCreateDocumentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    document: Optional[dict[str, Any]] = field(default=None)
    
