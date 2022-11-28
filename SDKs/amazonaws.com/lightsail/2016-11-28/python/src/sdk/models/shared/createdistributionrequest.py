from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDistributionRequest:
    bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    default_cache_behavior: CacheBehavior = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCacheBehavior') }})
    distribution_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionName') }})
    origin: InputOrigin = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    cache_behavior_settings: Optional[CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviorSettings') }})
    cache_behaviors: Optional[List[CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviors') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
