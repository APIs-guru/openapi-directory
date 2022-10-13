from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class StoreLayoutStoreLayoutTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    BASIC = "basic"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class StoreLayout:
    homepage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepageId' }})
    store_layout_type: Optional[StoreLayoutStoreLayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeLayoutType' }})
    
