from dataclasses import dataclass, field



@dataclass
class DatabaseDeleteCollectionPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatabaseDeleteCollectionSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseDeleteCollectionRequest:
    path_params: DatabaseDeleteCollectionPathParams = field(default=None)
    security: DatabaseDeleteCollectionSecurity = field(default=None)
    

@dataclass
class DatabaseDeleteCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
