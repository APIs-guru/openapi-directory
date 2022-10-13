from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateBucketRequest:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    enable_object_versioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableObjectVersioning' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
