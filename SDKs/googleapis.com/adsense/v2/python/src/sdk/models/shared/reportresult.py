from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportResult:
    r"""ReportResult
    Result of a generated report.
    """
    
    averages: Optional[Row] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averages') }})
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    headers: Optional[List[Header]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    total_matched_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMatchedRows') }})
    totals: Optional[Row] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
