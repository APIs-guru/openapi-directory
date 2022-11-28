from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPOrganizationDetails:
    r"""IPOrganizationDetails
    Provides information about an internet provider.
    """
    
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Asn') }})
    asn_org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AsnOrg') }})
    isp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Isp') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Org') }})
    
