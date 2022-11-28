from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntentConfirmationSetting:
    r"""IntentConfirmationSetting
    Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
    """
    
    declination_response: ResponseSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('declinationResponse') }})
    prompt_specification: PromptSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    
