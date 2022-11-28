from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Entry:
    r"""Entry
    A single entry in the confusion matrix.
    """
    
    item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemCount') }})
    predicted_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedLabel') }})
    
