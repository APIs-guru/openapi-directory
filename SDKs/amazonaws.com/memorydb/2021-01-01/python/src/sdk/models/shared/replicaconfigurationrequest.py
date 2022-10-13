from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicaConfigurationRequest:
    replica_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaCount' }})
    
