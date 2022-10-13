from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrustedAdvisorCheckRefreshStatus:
    check_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkId' }})
    millis_until_next_refreshable: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'millisUntilNextRefreshable' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
