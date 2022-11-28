from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreatePrintServersResponse:
    failures: Optional[List[PrintServerFailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    print_servers: Optional[List[PrintServer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printServers') }})
    
