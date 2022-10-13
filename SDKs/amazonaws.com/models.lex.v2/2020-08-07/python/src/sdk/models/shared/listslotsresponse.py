from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import slotsummary


@dataclass_json
@dataclass
class ListSlotsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentId' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    slot_summaries: Optional[List[slotsummary.SlotSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotSummaries' }})
    
