from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountUsage:
    r"""AccountUsage
    The number of functions and amount of storage in use.
    """
    
    function_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionCount') }})
    total_code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCodeSize') }})
    
