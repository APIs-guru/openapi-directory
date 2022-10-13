from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activecontext
from . import dialogaction
from . import intent


@dataclass_json
@dataclass
class SessionState:
    active_contexts: Optional[List[activecontext.ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeContexts' }})
    dialog_action: Optional[dialogaction.DialogAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogAction' }})
    intent: Optional[intent.Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    originating_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatingRequestId' }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionAttributes' }})
    
