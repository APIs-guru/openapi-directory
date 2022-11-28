from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NumberFilter:
    r"""NumberFilter
    A number filter for querying findings.
    """
    
    eq: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Eq') }})
    gte: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gte') }})
    lte: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lte') }})
    
