from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpenseDetection:
    r"""ExpenseDetection
    An object used to store information about the Value or Label detected by Amazon Textract.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    geometry: Optional[Geometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
