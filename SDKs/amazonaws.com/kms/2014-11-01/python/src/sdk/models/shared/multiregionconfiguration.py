from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import multiregionkeytype_enum
from . import multiregionkey
from . import multiregionkey


@dataclass_json
@dataclass
class MultiRegionConfiguration:
    multi_region_key_type: Optional[multiregionkeytype_enum.MultiRegionKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiRegionKeyType' }})
    primary_key: Optional[multiregionkey.MultiRegionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryKey' }})
    replica_keys: Optional[List[multiregionkey.MultiRegionKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaKeys' }})
    
