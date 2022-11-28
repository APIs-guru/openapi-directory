from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StoreLayoutStoreLayoutTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    BASIC = "basic"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class StoreLayout:
    r"""StoreLayout
    General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
    """
    
    homepage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageId') }})
    store_layout_type: Optional[StoreLayoutStoreLayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeLayoutType') }})
    
