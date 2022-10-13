from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keymetadata
from . import tag


@dataclass_json
@dataclass
class ReplicateKeyResponse:
    replica_key_metadata: Optional[keymetadata.KeyMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaKeyMetadata' }})
    replica_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaPolicy' }})
    replica_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaTags' }})
    
