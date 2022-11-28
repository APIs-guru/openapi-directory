from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExamplePayload:
    r"""ExamplePayload
    Example data used for training or prediction.
    """
    
    document: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    row: Optional[Row] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    text_snippet: Optional[TextSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSnippet') }})
    
