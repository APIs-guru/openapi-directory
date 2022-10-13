from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkreportspec


@dataclass_json
@dataclass
class GenerateNetworkReportRequest:
    report_spec: Optional[networkreportspec.NetworkReportSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportSpec' }})
    
