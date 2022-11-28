from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpenseField:
    r"""ExpenseField
    Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
    """
    
    label_detection: Optional[ExpenseDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelDetection') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    type: Optional[ExpenseType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value_detection: Optional[ExpenseDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDetection') }})
    
