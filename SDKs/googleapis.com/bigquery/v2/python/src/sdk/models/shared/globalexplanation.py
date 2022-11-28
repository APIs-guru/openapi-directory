from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalExplanation:
    r"""GlobalExplanation
    Global explanations containing the top most important features after training.
    """
    
    class_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classLabel') }})
    explanations: Optional[List[Explanation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanations') }})
    
