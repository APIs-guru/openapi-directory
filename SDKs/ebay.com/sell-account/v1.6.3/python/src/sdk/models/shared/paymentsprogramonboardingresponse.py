from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paymentsprogramonboardingsteps


@dataclass_json
@dataclass
class PaymentsProgramOnboardingResponse:
    onboarding_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardingStatus' }})
    steps: Optional[List[paymentsprogramonboardingsteps.PaymentsProgramOnboardingSteps]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
