from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import columnheader
from . import reportdata


@dataclass_json
@dataclass
class Report:
    column_header: Optional[columnheader.ColumnHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnHeader' }})
    data: Optional[reportdata.ReportData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
