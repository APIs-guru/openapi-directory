from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicateSecretToRegionsRequest:
    add_replica_regions: List[ReplicaRegionType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddReplicaRegions') }})
    secret_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    force_overwrite_replica_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceOverwriteReplicaSecret') }})
    
