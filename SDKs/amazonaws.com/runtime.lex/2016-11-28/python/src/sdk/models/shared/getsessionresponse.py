from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSessionResponse:
    active_contexts: Optional[List[ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    dialog_action: Optional[DialogAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    recent_intent_summary_view: Optional[List[IntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentIntentSummaryView') }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    
