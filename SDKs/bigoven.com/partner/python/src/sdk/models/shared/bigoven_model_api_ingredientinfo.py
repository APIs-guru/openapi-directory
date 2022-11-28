from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigOvenModelAPIIngredientInfo:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Department') }})
    master_ingredient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterIngredientID') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    usually_on_hand: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsuallyOnHand') }})
    
