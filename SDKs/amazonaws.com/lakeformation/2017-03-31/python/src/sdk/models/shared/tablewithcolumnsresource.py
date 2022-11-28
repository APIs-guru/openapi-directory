from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableWithColumnsResource:
    r"""TableWithColumnsResource
    <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnNames') }})
    column_wildcard: Optional[ColumnWildcard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnWildcard') }})
    
