from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import kyccheck


@dataclass_json
@dataclass
class KycResponse:
    kyc_checks: Optional[List[kyccheck.KycCheck]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kycChecks' }})
    
