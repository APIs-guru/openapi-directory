from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mediationreportspec


@dataclass_json
@dataclass
class GenerateMediationReportRequest:
    report_spec: Optional[mediationreportspec.MediationReportSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportSpec' }})
    
