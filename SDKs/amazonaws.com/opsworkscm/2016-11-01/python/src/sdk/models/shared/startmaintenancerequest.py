from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartMaintenanceRequest:
    server_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    engine_attributes: Optional[List[EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineAttributes') }})
    
