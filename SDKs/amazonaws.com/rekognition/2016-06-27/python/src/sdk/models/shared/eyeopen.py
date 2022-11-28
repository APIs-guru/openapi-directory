from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EyeOpen:
    r"""EyeOpen
    Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
