from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import slottypesummary


@dataclass_json
@dataclass
class ListSlotTypesResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    slot_type_summaries: Optional[List[slottypesummary.SlotTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeSummaries' }})
    
