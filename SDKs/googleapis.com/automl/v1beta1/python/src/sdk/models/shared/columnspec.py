from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnSpec:
    r"""ColumnSpec
    A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
    """
    
    data_stats: Optional[DataStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStats') }})
    data_type: Optional[DataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    top_correlated_columns: Optional[List[CorrelatedColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topCorrelatedColumns') }})
    
