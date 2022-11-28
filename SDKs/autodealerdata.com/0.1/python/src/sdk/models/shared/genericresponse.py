from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenericResponse:
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheTimeLimit') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
