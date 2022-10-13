from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import trustedadvisorcheckdescription


@dataclass_json
@dataclass
class DescribeTrustedAdvisorChecksResponse:
    checks: List[trustedadvisorcheckdescription.TrustedAdvisorCheckDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    
