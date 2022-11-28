from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ClusterStateEnum(str, Enum):
    STATE_NOT_KNOWN = "STATE_NOT_KNOWN"
    READY = "READY"
    CREATING = "CREATING"
    RESIZING = "RESIZING"
    DISABLED = "DISABLED"

class ClusterDefaultStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
    """
    
    default_storage_type: Optional[ClusterDefaultStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultStorageType') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serveNodes') }})
    state: Optional[ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ClusterInput:
    r"""ClusterInput
    A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
    """
    
    default_storage_type: Optional[ClusterDefaultStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultStorageType') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serveNodes') }})
    
