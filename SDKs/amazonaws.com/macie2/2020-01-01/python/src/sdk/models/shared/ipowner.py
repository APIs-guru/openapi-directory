from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPOwner:
    asn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    asn_org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asnOrg' }})
    isp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isp' }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org' }})
    
