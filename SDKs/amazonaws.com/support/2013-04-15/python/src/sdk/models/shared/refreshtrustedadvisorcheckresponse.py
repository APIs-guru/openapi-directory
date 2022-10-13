from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import trustedadvisorcheckrefreshstatus


@dataclass_json
@dataclass
class RefreshTrustedAdvisorCheckResponse:
    status: trustedadvisorcheckrefreshstatus.TrustedAdvisorCheckRefreshStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
