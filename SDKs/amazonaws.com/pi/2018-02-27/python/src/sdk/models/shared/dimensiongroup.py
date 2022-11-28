from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionGroup:
    r"""DimensionGroup
    <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
    """
    
    group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
