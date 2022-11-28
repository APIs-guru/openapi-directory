from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPOwner:
    r"""IPOwner
    Provides information about the registered owner of an IP address.
    """
    
    asn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    asn_org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asnOrg') }})
    isp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isp') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    
