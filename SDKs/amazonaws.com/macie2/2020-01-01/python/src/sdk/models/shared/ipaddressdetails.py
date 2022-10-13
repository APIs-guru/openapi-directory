from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ipcity
from . import ipcountry
from . import ipgeolocation
from . import ipowner


@dataclass_json
@dataclass
class IPAddressDetails:
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressV4' }})
    ip_city: Optional[ipcity.IPCity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCity' }})
    ip_country: Optional[ipcountry.IPCountry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCountry' }})
    ip_geo_location: Optional[ipgeolocation.IPGeoLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipGeoLocation' }})
    ip_owner: Optional[ipowner.IPOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipOwner' }})
    
