from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import portalstatus


@dataclass_json
@dataclass
class CreatePortalResponse:
    portal_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalArn' }})
    portal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    portal_start_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalStartUrl' }})
    portal_status: portalstatus.PortalStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalStatus' }})
    sso_application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoApplicationId' }})
    
