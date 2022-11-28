from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KycResponse:
    r"""KycResponse
    This is the base response type of the getKYC method.
    """
    
    kyc_checks: Optional[List[KycCheck]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycChecks') }})
    
