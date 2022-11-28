from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IPAddressDetails:
    r"""IPAddressDetails
    Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
    """
    
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressV4') }})
    ip_city: Optional[IPCity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCity') }})
    ip_country: Optional[IPCountry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCountry') }})
    ip_geo_location: Optional[IPGeoLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipGeoLocation') }})
    ip_owner: Optional[IPOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipOwner') }})
    
