from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetLedgerAccountResponse:
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    operation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
