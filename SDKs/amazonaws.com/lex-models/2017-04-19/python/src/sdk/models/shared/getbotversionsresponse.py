from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import botmetadata


@dataclass_json
@dataclass
class GetBotVersionsResponse:
    bots: Optional[List[botmetadata.BotMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bots' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
