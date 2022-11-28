from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentsProgramOnboardingResponse:
    r"""PaymentsProgramOnboardingResponse
    Contains the payments program onboarding response
    """
    
    onboarding_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardingStatus') }})
    steps: Optional[List[PaymentsProgramOnboardingSteps]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
