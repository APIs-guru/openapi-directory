from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput:
    r"""GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput
    Request message for ProvisionAccountTicket RPC.
    """
    
    account: Optional[GoogleAnalyticsAdminV1alphaAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    
