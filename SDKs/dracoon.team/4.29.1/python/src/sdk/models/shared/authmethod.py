from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthMethod:
    r"""AuthMethod
    Authentication method
    """
    
    is_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
