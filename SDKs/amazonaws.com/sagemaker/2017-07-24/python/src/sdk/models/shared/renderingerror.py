from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RenderingError:
    r"""RenderingError
    A description of an error that occurred while rendering the template.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
