from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import printserverfailureinfo
from . import printserver


@dataclass_json
@dataclass
class BatchCreatePrintServersResponse:
    failures: Optional[List[printserverfailureinfo.PrintServerFailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    print_servers: Optional[List[printserver.PrintServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printServers' }})
    
