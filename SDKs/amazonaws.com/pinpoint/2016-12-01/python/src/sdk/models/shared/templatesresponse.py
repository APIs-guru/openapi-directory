from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TemplatesResponse:
    r"""TemplatesResponse
    Provides information about all the message templates that are associated with your Amazon Pinpoint account.
    """
    
    item: List[TemplateResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
