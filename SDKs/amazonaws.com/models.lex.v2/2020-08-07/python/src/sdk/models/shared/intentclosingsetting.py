from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntentClosingSetting:
    r"""IntentClosingSetting
    Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
    """
    
    closing_response: ResponseSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closingResponse') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    
