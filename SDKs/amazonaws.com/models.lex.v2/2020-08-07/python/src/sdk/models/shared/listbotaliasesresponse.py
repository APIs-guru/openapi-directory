from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBotAliasesResponse:
    bot_alias_summaries: Optional[List[BotAliasSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasSummaries') }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
