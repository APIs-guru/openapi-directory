from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import row
from . import date
from . import header
from . import row
from . import date
from . import row


@dataclass_json
@dataclass
class ReportResult:
    averages: Optional[row.Row] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averages' }})
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    headers: Optional[List[header.Header]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    total_matched_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMatchedRows' }})
    totals: Optional[row.Row] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
