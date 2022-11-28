from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdditionalOption:
    r"""AdditionalOption
    This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.
    """
    
    additional_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCost') }})
    option_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionType') }})
    
