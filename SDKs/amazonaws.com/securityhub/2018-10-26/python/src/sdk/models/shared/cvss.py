from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cvss:
    r"""Cvss
    CVSS scores from the advisory related to the vulnerability.
    """
    
    adjustments: Optional[List[Adjustment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Adjustments') }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseScore') }})
    base_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseVector') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
