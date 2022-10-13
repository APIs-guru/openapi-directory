from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cachesettings
from . import cachebehaviorperpath
from . import cachebehavior
from . import ipaddresstype_enum
from . import inputorigin
from . import tag


@dataclass_json
@dataclass
class CreateDistributionRequest:
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    cache_behavior_settings: Optional[cachesettings.CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviorSettings' }})
    cache_behaviors: Optional[List[cachebehaviorperpath.CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviors' }})
    default_cache_behavior: cachebehavior.CacheBehavior = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCacheBehavior' }})
    distribution_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionName' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    origin: inputorigin.InputOrigin = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
