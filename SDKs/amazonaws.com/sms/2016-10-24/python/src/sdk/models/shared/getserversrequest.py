from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vmserveraddress


@dataclass_json
@dataclass
class GetServersRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    vm_server_address_list: Optional[List[vmserveraddress.VMServerAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmServerAddressList' }})
    
