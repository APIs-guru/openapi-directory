from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecuteWebhookResponse:
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
