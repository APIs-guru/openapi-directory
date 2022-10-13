from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import printserverfailureinfo


@dataclass_json
@dataclass
class BatchDeletePrintServersResponse:
    failed_print_servers: Optional[List[printserverfailureinfo.PrintServerFailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedPrintServers' }})
    print_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printServerIds' }})
    
