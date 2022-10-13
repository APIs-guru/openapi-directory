from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisassociateDrtLogBucketRequest:
    log_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogBucket' }})
    
