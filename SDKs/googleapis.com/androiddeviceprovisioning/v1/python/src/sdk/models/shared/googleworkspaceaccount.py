from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleWorkspaceAccount:
    r"""GoogleWorkspaceAccount
    A Google Workspace customer.
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    pre_provisioning_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preProvisioningTokens') }})
    

@dataclass_json
@dataclass
class GoogleWorkspaceAccountInput:
    r"""GoogleWorkspaceAccountInput
    A Google Workspace customer.
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
