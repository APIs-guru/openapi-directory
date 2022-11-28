from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicaConfigurationRequest:
    r"""ReplicaConfigurationRequest
    A request to configure the number of replicas in a shard
    """
    
    replica_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaCount') }})
    
