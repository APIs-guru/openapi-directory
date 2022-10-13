from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oncwificontext
from . import passwordpoliciescontext


@dataclass_json
@dataclass
class SpecificNonComplianceContext:
    onc_wifi_context: Optional[oncwificontext.OncWifiContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oncWifiContext' }})
    password_policies_context: Optional[passwordpoliciescontext.PasswordPoliciesContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordPoliciesContext' }})
    
