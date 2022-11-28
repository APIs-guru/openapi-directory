from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Page:
    r"""Page
    Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
    """
    
    line_range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineRange') }})
    offset_range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRange') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    
