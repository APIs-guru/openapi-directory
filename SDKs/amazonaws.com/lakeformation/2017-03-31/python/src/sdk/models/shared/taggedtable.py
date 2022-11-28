from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaggedTable:
    r"""TaggedTable
    A structure describing a table resource with tags.
    """
    
    lf_tag_on_database: Optional[List[LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagOnDatabase') }})
    lf_tags_on_columns: Optional[List[ColumnLfTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnColumns') }})
    lf_tags_on_table: Optional[List[LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnTable') }})
    table: Optional[TableResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    
