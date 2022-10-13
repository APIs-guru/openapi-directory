from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class DatabaseCreateCollectionRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    rules: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    write: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass
class DatabaseCreateCollectionSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseCreateCollectionRequest:
    request: Optional[DatabaseCreateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DatabaseCreateCollectionSecurity = field(default=None)
    

@dataclass
class DatabaseCreateCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    collection: Optional[shared.Collection] = field(default=None)
    
