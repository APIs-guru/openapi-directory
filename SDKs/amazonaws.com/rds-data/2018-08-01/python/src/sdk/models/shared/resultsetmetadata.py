from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSetMetadata:
    r"""ResultSetMetadata
    The metadata of the result set returned by a SQL statement.
    """
    
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCount') }})
    column_metadata: Optional[List[ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMetadata') }})
    
