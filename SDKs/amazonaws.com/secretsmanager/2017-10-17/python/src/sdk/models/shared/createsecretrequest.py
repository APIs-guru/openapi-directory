from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaregiontype
from . import tag


@dataclass_json
@dataclass
class CreateSecretRequest:
    add_replica_regions: Optional[List[replicaregiontype.ReplicaRegionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddReplicaRegions' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    force_overwrite_replica_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceOverwriteReplicaSecret' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    secret_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretBinary' }})
    secret_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretString' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
