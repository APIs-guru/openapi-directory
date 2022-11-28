from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NfsShareStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONED = "PROVISIONED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"

class NfsShareStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclass
class NfsShare:
    r"""NfsShare
    An NFS share.
    """
    
    allowed_clients: Optional[List[AllowedClient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClients') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfs_share_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsShareId') }})
    requested_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSizeGib') }})
    state: Optional[NfsShareStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    storage_type: Optional[NfsShareStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass_json
@dataclass
class NfsShareInput:
    r"""NfsShareInput
    An NFS share.
    """
    
    allowed_clients: Optional[List[AllowedClientInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClients') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    requested_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSizeGib') }})
    storage_type: Optional[NfsShareStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    
