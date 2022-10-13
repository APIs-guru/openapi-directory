from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import daterangevalues
from . import daterangevalues
from . import reportrow
from . import daterangevalues


@dataclass_json
@dataclass
class ReportData:
    data_last_refreshed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLastRefreshed' }})
    empty_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emptyReason' }})
    is_data_golden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDataGolden' }})
    maximums: Optional[List[daterangevalues.DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximums' }})
    minimums: Optional[List[daterangevalues.DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimums' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    rows: Optional[List[reportrow.ReportRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    samples_read_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplesReadCounts' }})
    sampling_space_sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingSpaceSizes' }})
    totals: Optional[List[daterangevalues.DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    
