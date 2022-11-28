from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPrintersResponse:
    r"""ListPrintersResponse
    Response for listing printers.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    printers: Optional[List[Printer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printers') }})
    
