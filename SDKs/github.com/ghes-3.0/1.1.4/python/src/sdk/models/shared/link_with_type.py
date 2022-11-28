from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkWithType:
    r"""LinkWithType
    Hypermedia Link with Type
    """
    
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
