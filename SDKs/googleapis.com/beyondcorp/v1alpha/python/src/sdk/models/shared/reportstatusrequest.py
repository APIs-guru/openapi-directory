from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceinfo


@dataclass_json
@dataclass
class ReportStatusRequest:
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resource_info: Optional[resourceinfo.ResourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceInfo' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
