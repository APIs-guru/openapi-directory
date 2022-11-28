from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput:
    r"""GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput
    Request message for CreateUserLink RPC. Users can have multiple email addresses associated with their Google account, and one of these email addresses is the \"primary\" email address. Any of the email addresses associated with a Google account may be used for a new UserLink, but the returned UserLink will always contain the \"primary\" email address. As a result, the input and output email address for this request may differ.
    """
    
    notify_new_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyNewUser') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    user_link: Optional[GoogleAnalyticsAdminV1alphaUserLinkInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLink') }})
    
