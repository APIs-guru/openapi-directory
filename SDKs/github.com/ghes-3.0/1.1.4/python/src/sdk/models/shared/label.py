from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Label:
    r"""Label
    Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
    """
    
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
