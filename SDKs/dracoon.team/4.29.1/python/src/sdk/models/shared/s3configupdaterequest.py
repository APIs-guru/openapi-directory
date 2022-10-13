from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ConfigUpdateRequest:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKey' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketUrl' }})
    endpoint_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointUrl' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretKey' }})
    
