from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSecretRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    add_replica_regions: Optional[List[ReplicaRegionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddReplicaRegions') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    force_overwrite_replica_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceOverwriteReplicaSecret') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    secret_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretBinary') }})
    secret_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretString') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
