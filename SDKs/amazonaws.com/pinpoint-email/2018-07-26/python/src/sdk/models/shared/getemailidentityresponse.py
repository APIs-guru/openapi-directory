from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEmailIdentityResponse:
    r"""GetEmailIdentityResponse
    Details about an email identity.
    """
    
    dkim_attributes: Optional[DkimAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimAttributes') }})
    feedback_forwarding_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingStatus') }})
    identity_type: Optional[IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    mail_from_attributes: Optional[MailFromAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromAttributes') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    verified_for_sending_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedForSendingStatus') }})
    
