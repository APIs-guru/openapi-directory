from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpecificNonComplianceContext:
    r"""SpecificNonComplianceContext
    Additional context for SpecificNonComplianceReason.
    """
    
    onc_wifi_context: Optional[OncWifiContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oncWifiContext') }})
    password_policies_context: Optional[PasswordPoliciesContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPoliciesContext') }})
    
