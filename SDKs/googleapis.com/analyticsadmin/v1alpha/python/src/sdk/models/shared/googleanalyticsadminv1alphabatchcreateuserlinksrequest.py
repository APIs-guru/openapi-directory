from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput:
    r"""GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput
    Request message for BatchCreateUserLinks RPC.
    """
    
    notify_new_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyNewUsers') }})
    requests: Optional[List[GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
