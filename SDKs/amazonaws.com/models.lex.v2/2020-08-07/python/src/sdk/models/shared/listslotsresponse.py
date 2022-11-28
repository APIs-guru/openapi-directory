from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSlotsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    slot_summaries: Optional[List[SlotSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotSummaries') }})
    
