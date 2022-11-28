from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Program:
    r"""Program
    A seller program in to which a seller can opt-in.
    """
    
    program_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programType') }})
    
