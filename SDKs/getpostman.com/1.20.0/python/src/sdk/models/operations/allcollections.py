from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllCollections200ApplicationJSONCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class AllCollections200ApplicationJSON:
    collections: Optional[List[AllCollections200ApplicationJSONCollections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    

@dataclass
class AllCollectionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    all_collections_200_application_json_object: Optional[AllCollections200ApplicationJSON] = field(default=None)
    
