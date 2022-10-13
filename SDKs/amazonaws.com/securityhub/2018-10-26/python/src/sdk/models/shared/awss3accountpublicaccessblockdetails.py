from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3AccountPublicAccessBlockDetails:
    block_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicAcls' }})
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockPublicPolicy' }})
    ignore_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnorePublicAcls' }})
    restrict_public_buckets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestrictPublicBuckets' }})
    
