from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentsProgramOnboardingSteps:
    r"""PaymentsProgramOnboardingSteps
    The payments program onboarding steps, status, and link.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webUrl') }})
    
