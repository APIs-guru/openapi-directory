from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import botchannelassociation


@dataclass_json
@dataclass
class GetBotChannelAssociationsResponse:
    bot_channel_associations: Optional[List[botchannelassociation.BotChannelAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botChannelAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
