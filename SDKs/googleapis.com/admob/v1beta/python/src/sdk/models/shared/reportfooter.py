from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportwarning


@dataclass_json
@dataclass
class ReportFooter:
    matching_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingRowCount' }})
    warnings: Optional[List[reportwarning.ReportWarning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
