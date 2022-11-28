from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LunRange:
    r"""LunRange
    A LUN(Logical Unit Number) range.
    """
    
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    
