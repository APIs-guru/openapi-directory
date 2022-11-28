from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetStatementResultResponse:
    records: List[List[Field]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    column_metadata: Optional[List[ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnMetadata') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    total_num_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNumRows') }})
    
