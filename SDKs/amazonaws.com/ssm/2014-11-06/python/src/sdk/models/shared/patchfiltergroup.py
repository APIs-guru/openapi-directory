from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchFilterGroup:
    r"""PatchFilterGroup
    A set of patch filters, typically used for approval rules.
    """
    
    patch_filters: List[PatchFilter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchFilters') }})
    
