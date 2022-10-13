from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monitorerrordetails
from . import portalstate_enum


@dataclass_json
@dataclass
class PortalStatus:
    error: Optional[monitorerrordetails.MonitorErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    state: portalstate_enum.PortalStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
