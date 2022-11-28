from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeSpecification:
    r"""CreativeSpecification
    Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
    """
    
    creative_companion_sizes: Optional[List[AdSize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeCompanionSizes') }})
    creative_size: Optional[AdSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSize') }})
    
