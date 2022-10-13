from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import topmodelentry


@dataclass_json
@dataclass
class TopModelResp:
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    cache_time_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheTimeLimit' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    data: List[topmodelentry.TopModelEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    
