from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElbLoadBalancerAccessLog:
    emit_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmitInterval' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketPrefix' }})
    
