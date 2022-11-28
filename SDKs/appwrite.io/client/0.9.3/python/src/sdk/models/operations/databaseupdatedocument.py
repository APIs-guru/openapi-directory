from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DatabaseUpdateDocumentPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    document_id: str = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseUpdateDocumentRequestBody:
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass
class DatabaseUpdateDocumentSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseUpdateDocumentRequest:
    path_params: DatabaseUpdateDocumentPathParams = field()
    security: DatabaseUpdateDocumentSecurity = field()
    request: Optional[DatabaseUpdateDocumentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DatabaseUpdateDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    document: Optional[dict[str, Any]] = field(default=None)
    
