from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Parameter:
    r"""Parameter
    Assigns a value to a named Pipeline parameter.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
