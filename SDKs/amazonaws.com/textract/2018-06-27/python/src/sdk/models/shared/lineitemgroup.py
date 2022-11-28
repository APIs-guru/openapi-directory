from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineItemGroup:
    r"""LineItemGroup
    A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
    """
    
    line_item_group_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemGroupIndex') }})
    line_items: Optional[List[LineItemFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItems') }})
    
