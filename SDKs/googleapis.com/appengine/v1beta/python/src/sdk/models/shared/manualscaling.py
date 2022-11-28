from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManualScaling:
    r"""ManualScaling
    A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
    """
    
    instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
