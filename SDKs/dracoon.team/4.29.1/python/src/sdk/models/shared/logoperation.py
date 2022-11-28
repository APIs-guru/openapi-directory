from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogOperation:
    r"""LogOperation
    Log operation
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_deprecated: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeprecated') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
