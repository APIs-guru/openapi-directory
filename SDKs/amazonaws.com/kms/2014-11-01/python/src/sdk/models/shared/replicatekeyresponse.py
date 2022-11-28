from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicateKeyResponse:
    replica_key_metadata: Optional[KeyMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaKeyMetadata') }})
    replica_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaPolicy') }})
    replica_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaTags') }})
    
