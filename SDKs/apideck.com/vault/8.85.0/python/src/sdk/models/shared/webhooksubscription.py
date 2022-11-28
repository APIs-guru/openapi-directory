from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookSubscription:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    downstream_event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_event_types') }})
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_id') }})
    execute_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execute_url') }})
    unify_event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unify_event_types') }})
    
