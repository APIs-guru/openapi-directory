from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alert


@dataclass_json
@dataclass
class DescribeAlertResponse:
    alert: Optional[alert.Alert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alert' }})
    
