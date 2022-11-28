from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCallAnalyticsCategoryRequest:
    category_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoryName') }})
    rules: List[Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
