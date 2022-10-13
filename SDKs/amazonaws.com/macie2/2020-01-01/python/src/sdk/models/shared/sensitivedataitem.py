from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sensitivedataitemcategory_enum
from . import defaultdetection


@dataclass_json
@dataclass
class SensitiveDataItem:
    category: Optional[sensitivedataitemcategory_enum.SensitiveDataItemCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    detections: Optional[List[defaultdetection.DefaultDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detections' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
