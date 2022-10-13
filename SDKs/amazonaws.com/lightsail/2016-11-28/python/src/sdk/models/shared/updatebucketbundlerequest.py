from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateBucketBundleRequest:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    
