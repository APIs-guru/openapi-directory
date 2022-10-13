from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportfooter
from . import reportheader
from . import reportrow


@dataclass_json
@dataclass
class GenerateNetworkReportResponse:
    footer: Optional[reportfooter.ReportFooter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    header: Optional[reportheader.ReportHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    row: Optional[reportrow.ReportRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    
