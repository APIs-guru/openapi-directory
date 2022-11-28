from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelYearDistResp:
    data: List[ModelYearDistEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheTimeLimit') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
