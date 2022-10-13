from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablerow


@dataclass_json
@dataclass
class TableDataList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    rows: Optional[List[tablerow.TableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    total_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRows' }})
    
