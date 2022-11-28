from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReviewReport:
    r"""ReviewReport
     Contains both ReviewResult and ReviewAction elements for a particular HIT. 
    """
    
    review_actions: Optional[List[ReviewActionDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewActions') }})
    review_results: Optional[List[ReviewResultDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewResults') }})
    
