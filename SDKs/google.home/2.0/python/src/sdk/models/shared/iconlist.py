from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IconList:
    depth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    mimetype: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimetype') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
