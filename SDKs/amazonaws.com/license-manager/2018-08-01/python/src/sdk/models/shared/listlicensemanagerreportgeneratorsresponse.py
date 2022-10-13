from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportgenerator


@dataclass_json
@dataclass
class ListLicenseManagerReportGeneratorsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    report_generators: Optional[List[reportgenerator.ReportGenerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportGenerators' }})
    
