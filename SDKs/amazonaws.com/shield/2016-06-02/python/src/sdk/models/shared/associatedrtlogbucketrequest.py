from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateDrtLogBucketRequest:
    log_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogBucket') }})
    
