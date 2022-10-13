from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbStatusInfo:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    normal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Normal' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusType' }})
    
