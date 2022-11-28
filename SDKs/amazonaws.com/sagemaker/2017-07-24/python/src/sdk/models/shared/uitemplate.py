from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UITemplate:
    r"""UITemplate
    The Liquid template for the worker user interface.
    """
    
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    
