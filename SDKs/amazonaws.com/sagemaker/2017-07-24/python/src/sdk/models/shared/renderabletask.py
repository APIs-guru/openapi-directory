from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RenderableTask:
    r"""RenderableTask
    Contains input values for a task.
    """
    
    input: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    
