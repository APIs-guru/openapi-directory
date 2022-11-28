from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateRowsResponse:
    r"""BatchCreateRowsResponse
    Response message for TablesService.BatchCreateRows.
    """
    
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
