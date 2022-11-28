from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TemplateVersionsResponse:
    r"""TemplateVersionsResponse
    Provides information about all the versions of a specific message template.
    """
    
    item: List[TemplateVersionResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestID') }})
    
