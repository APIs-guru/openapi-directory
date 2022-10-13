from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inappmessagecampaign


@dataclass_json
@dataclass
class InAppMessagesResponse:
    in_app_message_campaigns: Optional[List[inappmessagecampaign.InAppMessageCampaign]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppMessageCampaigns' }})
    
