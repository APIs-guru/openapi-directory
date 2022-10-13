from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import botversionsummary


@dataclass_json
@dataclass
class ListBotVersionsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version_summaries: Optional[List[botversionsummary.BotVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
