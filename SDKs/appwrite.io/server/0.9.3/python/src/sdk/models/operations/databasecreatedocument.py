from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DatabaseCreateDocumentPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseCreateDocumentRequestBody:
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    parent_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDocument') }})
    parent_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentProperty') }})
    parent_property_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPropertyType') }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass
class DatabaseCreateDocumentSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseCreateDocumentRequest:
    path_params: DatabaseCreateDocumentPathParams = field()
    security: DatabaseCreateDocumentSecurity = field()
    request: Optional[DatabaseCreateDocumentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DatabaseCreateDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    document: Optional[dict[str, Any]] = field(default=None)
    
