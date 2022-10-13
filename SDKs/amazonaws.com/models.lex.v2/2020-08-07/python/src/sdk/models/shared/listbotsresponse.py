from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import botsummary


@dataclass_json
@dataclass
class ListBotsResponse:
    bot_summaries: Optional[List[botsummary.BotSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
