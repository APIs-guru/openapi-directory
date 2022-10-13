from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateWebhookRequest:
    event_type_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypeNames' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    trigger_example_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerExampleEvent' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
