from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    An Environment describes a collection of environment variables to set when executing Tasks.
    """
    
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
