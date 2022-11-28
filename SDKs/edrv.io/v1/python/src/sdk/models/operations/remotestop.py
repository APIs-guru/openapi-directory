from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemotestopRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    

@dataclass
class RemotestopRequest:
    request: RemotestopRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemotestopResponse:
    content_type: str = field()
    status_code: int = field()
    
