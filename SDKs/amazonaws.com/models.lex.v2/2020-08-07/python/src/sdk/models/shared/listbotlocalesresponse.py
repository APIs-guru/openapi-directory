from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import botlocalesummary


@dataclass_json
@dataclass
class ListBotLocalesResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_locale_summaries: Optional[List[botlocalesummary.BotLocaleSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleSummaries' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
