from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DatabaseDeleteCollectionPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseDeleteCollectionSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseDeleteCollectionRequest:
    path_params: DatabaseDeleteCollectionPathParams = field()
    security: DatabaseDeleteCollectionSecurity = field()
    

@dataclass
class DatabaseDeleteCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    
