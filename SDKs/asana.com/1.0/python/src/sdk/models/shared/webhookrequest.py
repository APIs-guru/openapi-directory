from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookRequestFilters:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class WebhookRequest:
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    filters: Optional[List[WebhookRequestFilters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    
