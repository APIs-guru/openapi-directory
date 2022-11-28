from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeletePrintServersResponse:
    failed_print_servers: Optional[List[PrintServerFailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedPrintServers') }})
    print_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printServerIds') }})
    
