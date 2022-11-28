from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetEmailIdentityPoliciesResponse:
    r"""GetEmailIdentityPoliciesResponse
    Identity policies associated with email identity.
    """
    
    policies: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    
