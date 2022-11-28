from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChangeSummary:
    r"""ChangeSummary
    This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
    """
    
    change_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeName') }})
    change_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    entity: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entity') }})
    error_detail_list: Optional[List[ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetailList') }})
    
