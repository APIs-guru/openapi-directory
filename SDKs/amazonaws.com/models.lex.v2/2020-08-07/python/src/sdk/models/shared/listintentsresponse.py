from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import intentsummary


@dataclass_json
@dataclass
class ListIntentsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    intent_summaries: Optional[List[intentsummary.IntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentSummaries' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
