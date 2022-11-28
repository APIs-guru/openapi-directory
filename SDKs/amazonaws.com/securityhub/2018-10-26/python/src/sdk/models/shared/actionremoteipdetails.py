from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionRemoteIPDetails:
    r"""ActionRemoteIPDetails
    For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
    """
    
    city: Optional[City] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[Country] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    geo_location: Optional[GeoLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoLocation') }})
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressV4') }})
    organization: Optional[IPOrganizationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organization') }})
    
