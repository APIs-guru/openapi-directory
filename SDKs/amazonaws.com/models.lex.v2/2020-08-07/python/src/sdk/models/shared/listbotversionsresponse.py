from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBotVersionsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version_summaries: Optional[List[BotVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersionSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
