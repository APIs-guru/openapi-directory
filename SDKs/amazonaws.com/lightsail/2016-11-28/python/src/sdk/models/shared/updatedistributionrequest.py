from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cachesettings
from . import cachebehaviorperpath
from . import cachebehavior
from . import inputorigin


@dataclass_json
@dataclass
class UpdateDistributionRequest:
    cache_behavior_settings: Optional[cachesettings.CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviorSettings' }})
    cache_behaviors: Optional[List[cachebehaviorperpath.CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBehaviors' }})
    default_cache_behavior: Optional[cachebehavior.CacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCacheBehavior' }})
    distribution_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionName' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    origin: Optional[inputorigin.InputOrigin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    
