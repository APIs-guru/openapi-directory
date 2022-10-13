from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DatabaseUpdateCollectionPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DatabaseUpdateCollectionRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    write: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass
class DatabaseUpdateCollectionSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseUpdateCollectionRequest:
    path_params: DatabaseUpdateCollectionPathParams = field(default=None)
    request: Optional[DatabaseUpdateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DatabaseUpdateCollectionSecurity = field(default=None)
    

@dataclass
class DatabaseUpdateCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    collection: Optional[shared.Collection] = field(default=None)
    
