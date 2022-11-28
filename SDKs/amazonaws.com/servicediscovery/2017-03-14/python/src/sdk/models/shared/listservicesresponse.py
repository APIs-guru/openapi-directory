from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServicesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    services: Optional[List[ServiceSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Services') }})
    
