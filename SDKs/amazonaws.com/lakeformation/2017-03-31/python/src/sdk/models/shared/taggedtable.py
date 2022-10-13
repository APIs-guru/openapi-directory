from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lftagpair
from . import columnlftag
from . import lftagpair
from . import tableresource


@dataclass_json
@dataclass
class TaggedTable:
    lf_tag_on_database: Optional[List[lftagpair.LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTagOnDatabase' }})
    lf_tags_on_columns: Optional[List[columnlftag.ColumnLfTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTagsOnColumns' }})
    lf_tags_on_table: Optional[List[lftagpair.LfTagPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LFTagsOnTable' }})
    table: Optional[tableresource.TableResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Table' }})
    
