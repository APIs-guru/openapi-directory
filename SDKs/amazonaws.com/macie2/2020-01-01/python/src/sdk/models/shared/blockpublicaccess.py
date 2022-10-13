from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BlockPublicAccess:
    block_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockPublicAcls' }})
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockPublicPolicy' }})
    ignore_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignorePublicAcls' }})
    restrict_public_buckets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictPublicBuckets' }})
    
