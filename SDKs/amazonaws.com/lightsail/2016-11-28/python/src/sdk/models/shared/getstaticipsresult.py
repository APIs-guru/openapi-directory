from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import staticip


@dataclass_json
@dataclass
class GetStaticIpsResult:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    static_ips: Optional[List[staticip.StaticIP]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIps' }})
    
