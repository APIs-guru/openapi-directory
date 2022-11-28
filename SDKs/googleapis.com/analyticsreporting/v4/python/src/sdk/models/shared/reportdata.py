from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportData:
    r"""ReportData
    The data part of the report.
    """
    
    data_last_refreshed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLastRefreshed') }})
    empty_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyReason') }})
    is_data_golden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDataGolden') }})
    maximums: Optional[List[DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximums') }})
    minimums: Optional[List[DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimums') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    rows: Optional[List[ReportRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    samples_read_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplesReadCounts') }})
    sampling_space_sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingSpaceSizes') }})
    totals: Optional[List[DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
