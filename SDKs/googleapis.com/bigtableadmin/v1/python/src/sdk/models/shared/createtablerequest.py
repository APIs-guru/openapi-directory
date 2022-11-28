from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTableRequestInput:
    r"""CreateTableRequestInput
    Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
    """
    
    initial_splits: Optional[List[Split]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSplits') }})
    table: Optional[TableInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableId') }})
    
