from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Rule:
    r"""Rule
    Rule
    """
    
    dollar_collection: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$collection') }})
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    array: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('array') }})
    default: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
