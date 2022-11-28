from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Range:
    r"""Range
    Range information
    """
    
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
