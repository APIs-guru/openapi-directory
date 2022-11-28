from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestIdentityProviderResponse:
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Response') }})
    
