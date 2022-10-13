from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trustedadvisorcheckresult


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckResultResponse:
    result: Optional[trustedadvisorcheckresult.TrustedAdvisorCheckResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
