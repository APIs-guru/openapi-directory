from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOperationsResponse:
    r"""ListOperationsResponse
    The ListOperations response includes the following elements.
    """
    
    operations: List[OperationSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    next_page_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
