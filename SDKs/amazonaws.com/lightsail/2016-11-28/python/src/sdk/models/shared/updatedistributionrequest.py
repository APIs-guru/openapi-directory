from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDistributionRequest:
    distribution_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionName') }})
    cache_behavior_settings: Optional[CacheSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviorSettings') }})
    cache_behaviors: Optional[List[CacheBehaviorPerPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviors') }})
    default_cache_behavior: Optional[CacheBehavior] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCacheBehavior') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    origin: Optional[InputOrigin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    
