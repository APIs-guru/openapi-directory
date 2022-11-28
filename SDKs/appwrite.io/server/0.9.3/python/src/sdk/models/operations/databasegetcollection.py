from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DatabaseGetCollectionPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseGetCollectionSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseGetCollectionRequest:
    path_params: DatabaseGetCollectionPathParams = field()
    security: DatabaseGetCollectionSecurity = field()
    

@dataclass
class DatabaseGetCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    collection: Optional[shared.Collection] = field(default=None)
    
