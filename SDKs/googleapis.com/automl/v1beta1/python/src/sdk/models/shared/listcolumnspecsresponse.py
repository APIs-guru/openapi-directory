from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnspec


@dataclass_json
@dataclass
class ListColumnSpecsResponse:
    column_specs: Optional[List[columnspec.ColumnSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpecs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
