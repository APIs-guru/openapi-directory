from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activecontext
from . import dialogaction
from . import intentsummary


@dataclass_json
@dataclass
class GetSessionResponse:
    active_contexts: Optional[List[activecontext.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeContexts' }})
    dialog_action: Optional[dialogaction.DialogAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogAction' }})
    recent_intent_summary_view: Optional[List[intentsummary.IntentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentIntentSummaryView' }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAttributes' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    
