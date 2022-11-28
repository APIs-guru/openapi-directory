from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserRating:
    item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    rating: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    
