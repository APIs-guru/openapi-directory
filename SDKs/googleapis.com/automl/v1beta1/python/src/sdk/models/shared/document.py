from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Document:
    r"""Document
    A structured text document e.g. a PDF.
    """
    
    document_dimensions: Optional[DocumentDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentDimensions') }})
    document_text: Optional[TextSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentText') }})
    input_config: Optional[DocumentInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    layout: Optional[List[Layout]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    
