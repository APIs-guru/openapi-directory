from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import portalstatus


@dataclass_json
@dataclass
class UpdatePortalResponse:
    portal_status: portalstatus.PortalStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalStatus' }})
    
