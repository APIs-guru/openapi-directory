from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPOrganizationDetails:
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Asn' }})
    asn_org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsnOrg' }})
    isp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Isp' }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Org' }})
    
