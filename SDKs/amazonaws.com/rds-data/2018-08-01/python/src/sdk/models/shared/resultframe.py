from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultFrame:
    r"""ResultFrame
    The result set returned by a SQL statement.
    """
    
    records: Optional[List[Record]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    result_set_metadata: Optional[ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultSetMetadata') }})
    
