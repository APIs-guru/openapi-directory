from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateCollectionResponse:
    collection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionArn' }})
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    
