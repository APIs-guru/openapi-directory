from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBotAliasesResponse:
    bot_aliases: Optional[List[BotAliasMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BotAliases') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
