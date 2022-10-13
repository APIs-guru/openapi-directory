from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaregiontype


@dataclass_json
@dataclass
class ReplicateSecretToRegionsRequest:
    add_replica_regions: List[replicaregiontype.ReplicaRegionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddReplicaRegions' }})
    force_overwrite_replica_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceOverwriteReplicaSecret' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    
