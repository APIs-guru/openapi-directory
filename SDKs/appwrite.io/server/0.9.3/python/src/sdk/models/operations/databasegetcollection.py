from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DatabaseGetCollectionPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseGetCollectionSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseGetCollectionRequest:
    path_params: DatabaseGetCollectionPathParams = field(default=None)
    security: DatabaseGetCollectionSecurity = field(default=None)
    

@dataclass
class DatabaseGetCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    collection: Optional[shared.Collection] = field(default=None)
    
