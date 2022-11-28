from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagModel:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product: Optional[ProductModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    
