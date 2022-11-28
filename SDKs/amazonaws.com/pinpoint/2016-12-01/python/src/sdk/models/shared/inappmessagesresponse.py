from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessagesResponse:
    r"""InAppMessagesResponse
    Get in-app messages response object.
    """
    
    in_app_message_campaigns: Optional[List[InAppMessageCampaign]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessageCampaigns') }})
    
