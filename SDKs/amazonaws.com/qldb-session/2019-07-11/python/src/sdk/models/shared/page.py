from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Page:
    r"""Page
    Contains details of the fetched page.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    values: Optional[List[ValueHolder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
