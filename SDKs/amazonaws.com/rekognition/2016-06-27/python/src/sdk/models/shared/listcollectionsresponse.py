from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListCollectionsResponse:
    collection_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionIds' }})
    face_model_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
