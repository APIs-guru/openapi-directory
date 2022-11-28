from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VariableSet:
    r"""VariableSet
    A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.
    """
    
    placeholder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeholder') }})
    user_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userValue') }})
    
