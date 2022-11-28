from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTreeId') }})
    domestic: Optional[ReturnPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domestic') }})
    international: Optional[ReturnPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
