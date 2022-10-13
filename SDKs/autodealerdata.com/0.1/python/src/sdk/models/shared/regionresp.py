from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionResp:
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheTimeLimit' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    data: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    
