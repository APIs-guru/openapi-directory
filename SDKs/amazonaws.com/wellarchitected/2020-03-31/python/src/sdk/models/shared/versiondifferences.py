from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VersionDifferences:
    r"""VersionDifferences
    The differences between the base and latest versions of the lens.
    """
    
    pillar_differences: Optional[List[PillarDifference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarDifferences') }})
    
