from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestInput:
    list: Optional[BigOvenModelAPIGroceryGroceryListInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('since') }})
    
